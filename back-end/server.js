const Cors = require("cors");
// const Path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const dbConnection = require("./utils/databaseConnection.js");
const urlController = require("./controllers/urlController.js");
const redirectController = require("./controllers/redirectController.js");
const getAllUrlsController = require("./controllers/getAllUrlsController.js");
const deleteUrlController = require("./controllers/deleteUrlController.js");
const updateUrlController = require("./controllers/updateUrlController.js");
const allUrlsHistoryController = require("./controllers/allUrlsHistoryController.js");
const path = require("path");

// createing app
const app = express();
// middelwere
dotenv.config();
app.use(express.json());
app.use(
  Cors({
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
// routers
app.post("/api/v1/url", urlController);
app.patch("/api/v1/urlupdate", updateUrlController);
app.delete("/api/v1/url/:id", deleteUrlController);
app.get("/api/v1/allurls", getAllUrlsController);
// app.get("/:url", redirectController);
app.get("/api/v1/allUrlsHistory", allUrlsHistoryController);

app.use(express.static(path.join(__dirname, "../front-end/dist")));
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../", "front-end", "dist", "index.html")
  );
});

//PORT
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  dbConnection();
  console.log(`server listening on PORT ${PORT}`);
});
