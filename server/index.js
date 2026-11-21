const path = require("node:path");
const express = require("express");
const {MongoClient} = require("mongodb");
const nodemailer = require("nodemailer");
const {rateLimit} = require("express-rate-limit");

const app = express();
const env = process.env;
const buildPath = path.join(__dirname, "../build");
const db =
  env.MONGODB_URI &&
  new MongoClient(env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000
  });
const mail =
  env.SMTP_HOST &&
  env.SMTP_USER &&
  env.SMTP_PASS &&
  nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT || 587),
    secure: Number(env.SMTP_PORT) === 465,
    requireTLS: true,
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 15000,
    auth: {user: env.SMTP_USER, pass: env.SMTP_PASS}
  });
const contactLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: {message: "Too many messages. Please try again in a few minutes."}
});

app.disable("x-powered-by");
app.use("/api", express.json({limit: "24kb"}));
app.post("/api/contact", contactLimit, async (req, res) => {
  const name = typeof req.body?.name === "string" ? req.body.name.trim() : "";
  const email =
    typeof req.body?.email === "string" ? req.body.email.trim() : "";
  const message =
    typeof req.body?.message === "string" ? req.body.message.trim() : "";

  if (
    !name ||
    name.length > 100 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !message ||
    message.length > 4000
  ) {
    return res
      .status(400)
      .json({message: "Enter your name, a valid email, and a message."});
  }

  if (!db) {
    return res
      .status(503)
      .json({message: "The contact form is awaiting database setup."});
  }

  const messages = db
    .db(env.MONGODB_DATABASE || "samad_portfolio")
    .collection("messages");
  let id;
  try {
    const saved = await messages.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
      status: "pending"
    });
    id = saved.insertedId;
  } catch {
    return res.status(503).json({
      message: "Your message could not be saved. Please try again later."
    });
  }

  try {
    if (!mail || !env.CONTACT_FROM || !env.CONTACT_TO) {
      throw new Error("Contact email is not configured");
    }
    const delivery = await mail.sendMail({
      from: env.CONTACT_FROM,
      to: env.CONTACT_TO,
      replyTo: {address: email, name: ""},
      subject: "New message from Samad’s portfolio",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });
    if (!delivery.accepted.length) throw new Error("Recipient rejected");
  } catch {
    console.error("Contact message saved, but email delivery failed.");
    await messages
      .updateOne({_id: id}, {$set: {status: "failed"}})
      .catch(() => {});
    return res.status(201).json({
      message:
        "Thanks! Your message was saved. Email notification could not be sent."
    });
  }

  await messages.updateOne({_id: id}, {$set: {status: "sent"}}).catch(() => {
    console.error("Email sent, but the database could not record delivery.");
  });
  return res.json({message: "Thanks! Your message was sent."});
});

app.use("/api", (req, res) =>
  res.status(404).json({message: "Endpoint not found."})
);
app.use(express.static(buildPath));
app.get(/.*/, (req, res) => res.sendFile(path.join(buildPath, "index.html")));
app.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({
    message: status < 500 ? "Invalid request." : "Service unavailable."
  });
});

app.listen(Number(env.PORT || 3001), () => {
  console.log(
    `Samad’s portfolio server is listening on port ${env.PORT || 3001}.`
  );
});
