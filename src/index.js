//require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
  path: "./env",
});

connectDB;
/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${Db_name}`);
    app.on("Error", (error) => {
      console.error("ERROR", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is listening on http://localhost:${process.env.PORT}`,
      );
    });
  } catch (error) {
    console.error("ERROR".error);
    throw error;
  }
})();
*/
