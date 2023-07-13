const express = require("express");
const dbConnection = require("./utils/databaseConnection.js");
const router = require("./routes/urlRoute.js");
const Cors = require("cors");
// createing app
const app = express();

// middelwere
app.use(express.json());
app.use(router);
app.use(Cors({ origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));

//PORT
const PORT = 8000;

app.listen(PORT, () => {
  dbConnection();
  console.log(`server listening on PORT ${PORT}`);
});
