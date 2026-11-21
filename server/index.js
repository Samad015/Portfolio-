const path = require("node:path");
const express = require("express");
const app = require("./app");

const buildPath = path.join(__dirname, "../build");
app.use(express.static(buildPath));
app.get(/.*/, (req, res) => res.sendFile(path.join(buildPath, "index.html")));

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
  console.log(`Samad’s portfolio server is listening on port ${port}.`);
});
