import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import path from "path";
import fs from "fs";
import App from "./src/App";

const app = express();
app.use(express.static(path.resolve(__dirname, "build"), { index: false }));

app.get("/*", (req, res) => {
  const context = {};

  try {
    const reactApp = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    const templateFile = path.resolve("./build/index.html");
    fs.readFile(templateFile, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading template file:", err);
        return res.status(500).send("Error reading template file");
      }

      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${reactApp}</div>`
        )
      );
    });
  } catch (error) {
    console.error("Error during rendering:", error);
    res.status(500).send("An error occurred during rendering");
  }
});

app.listen(8080, () => {
  console.log("Server is listening on Port: 8080");
});
