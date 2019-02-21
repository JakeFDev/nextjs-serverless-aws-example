const express = require("express")
const serverless = require("serverless-http")
const app = express()

const getPage = page => require(`./.next/serverless/pages/${page}`).render

// Routes
app.get("/", getPage("index"))

app.get("*", require("./.next/serverless/pages/_error").render)

// Export lambda handler
exports.handler = serverless(app);