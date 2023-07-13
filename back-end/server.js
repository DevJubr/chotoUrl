const express = require("express");
const dbConnection = require("./utils/databaseConnection.js");
const urlController = require("./controllers/urlController.js");
const Cors = require("cors");
// createing app
const app = express();

// middelwere
app.use(express.json());
app.use(Cors({ origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));

// routers
app.post("/api/v1/url", urlController);

//PORT
const PORT = 8000;

app.listen(PORT, () => {
  dbConnection();
  console.log(`server listening on PORT ${PORT}`);
});
