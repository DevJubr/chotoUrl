import express from "express";
import { dbConnection } from "./utils/databaseConnection.js";
import { route } from "./routes/urlRoute.js";
import cors from "cors";
// createing app
const app = express();

// middelwere
app.use(express.json());
app.use(route());
app.use(cors());

//PORT
const PORT = 8000;

app.listen(PORT, () => {
  dbConnection();
  console.log(`server listening on PORT ${PORT}`);
});
