const app = require("../server/app");

app.set("trust proxy", 1);

module.exports = app;
