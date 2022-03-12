import dotenv from 'dotenv'
import app from "./app";
import './database'

dotenv.config()
// console.log('process.env.TESTING :>> ', process.env.TESTING)

function main() {
  app.listen(app.get('port'));
  console.log("server on port ", app.get('port'));
}
main();
console.log("It works! with tsc -w and nodemon !");

// npm init
// npm i typescript
// npx tsc --init
// npm i concurrently -D
// npm run dev
// npm i nodemon -D
// npm i express
//npm i @types/express
//npm i @types/express -D
//npm i morgan
//npm i @types/morgan -D
//npm i mongoose
  //mongod (in console to run mongo)
  // https://stackoverflow.com/questions/66916761/mongod-exiting-from-vs-code-integrated-terminal-but-can-run-mongo-command
  // environment variable path
//npm i @types/mongoose -D (deprecated)
//npm i body-parser (deprecated)
//npm i jsonwebtoken
//npm i @types/jsonwebtoken -D
//npm i dotenv
//npm i @types/dotenv -D (?)
//npm i bcryptjs
//npm i @types/bcryptjs -D


