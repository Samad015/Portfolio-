# Samad’s developer portfolio

Samad’s MERN portfolio uses an original neo-brutalist theme, a portrait-led homepage, and a curated GitHub project showcase. The project originated from [DeveloperFolio](https://github.com/saadpasta/developerFolio). See [LICENSE](LICENSE).

## Run locally

Use Node.js 22 or later.

```sh
npm ci
npm run build
npm start
```

Open http://localhost:3001. For frontend development, leave the server running and run `npm run dev` in a second terminal. The React development server proxies the contact API to port 3001.

## Run with Docker

```sh
docker compose up --build
```

Open http://localhost:3001. Compose starts the app and a local MongoDB instance, with database files in a named volume. MongoDB is accessible on the Compose network. To enable contact email, copy `.env.example` to `.env` and supply the SMTP and contact settings before starting Compose.

## Add portfolio content

Edit `src/portfolio.js` for your bio, social links, skills, education, experience, projects, and media. Put your resume in `public/resume.pdf` and set `greeting.resumeLink` to `/resume.pdf`. Projects, experience, education, skills, and resume have dedicated pages. Add links and descriptions directly in the portfolio configuration.

## Enable contact email

Copy `.env.example` to `.env`. Add your MongoDB connection URI and SMTP credentials from your email provider. Set `CONTACT_FROM` to a verified sender and `CONTACT_TO` to the inbox that should receive messages. Restart the server and send a test message from the Contact page.

The server validates submissions, limits request volume, writes messages to MongoDB, and relays them through SMTP. Replies go to the visitor’s email address. Keep credentials in the server environment.

### Contact form on Render

In Render, select **New → Blueprint** and connect this repository. The included `render.yaml` provisions a Node Web Service and prompts for the values below. Open the Web Service’s URL once it deploys. If you already have a Node Web Service, add these variables in its **Environment** settings and redeploy.

| Variable         | Value                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| `MONGODB_URI`    | A hosted MongoDB connection string accessible from Render, such as a MongoDB Atlas URI. |
| `RESEND_API_KEY` | A Resend API key with sending access.                                                   |
| `CONTACT_FROM`   | A sender address on a domain verified in Resend.                                        |
| `CONTACT_TO`     | The inbox that should receive contact messages.                                         |

When `RESEND_API_KEY` is set, the server sends contact notifications via HTTPS. Render Free Web Services block outbound SMTP ports 25, 465, and 587. [Render documentation](https://render.com/docs/free)

# Portfolio-
