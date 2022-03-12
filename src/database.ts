import mongoose from "mongoose";
import { isDebuggerStatement } from "typescript";

const uri = "mongodb://localhost/test";
const options = {};

mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Database connected ");
  })
  .catch((err) => console.log("err :>> ", err));

//mongo
// show databases = show dbs
// use test (database name)
// show collections
// db.Users.find()
// db.dropDatabase()