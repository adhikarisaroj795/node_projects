const express = require("express");
const nepaliSongsRoute = require("./nepaliSongsRoute");
const englishSongRoute = require("./englishSongRoute");
const hindiSongRoute = require("./hindiSongRoute");
const app = express();

app.use("/nepalisong", nepaliSongsRoute);
// app.use("englishsong", englishSongRoute);
// app.use("hindisong", hindiSongRoute);

module.exports = app;
