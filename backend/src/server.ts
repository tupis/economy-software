import express from "express";
import dotenv from "dotenv";
import router from "./routes/index";
dotenv.config();

const app = express();
app.use(express.json());
const port = 5000 || Number(process.env.PORT);
app.use(router);

app.listen(port, () => console.log("server online at port" + port));
