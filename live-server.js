const liveServer = require("live-server");

/** @type {import("live-server").LiveServerParams} */
const params = {
  root: "./src",
  port: 8080,
};

liveServer.start(params);
