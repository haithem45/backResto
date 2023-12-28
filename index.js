import express from "express";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import reservationRouter from "./routes/reservationRoute.js";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from 'cors'
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const port =9095;

connectDB();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// indice pour pointer sur le dossier public pour les fichiers
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(cookieParser())

app.use(foodRouter);
app.use(userRouter);
app.use(reservationRouter);


app.listen(port, () => {
  console.log(`listning port http://localhost:${port}`);
});



