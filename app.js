const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Global Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

module.exports = app;
