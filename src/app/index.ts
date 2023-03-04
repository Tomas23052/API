import express from "express";
import * as dotenv from "dotenv";

import { route } from "./routes";

dotenv.config();

const app = express();
app.use(express.json());

//bora
const { PORT } = process.env;
route(app);


app.listen(PORT, ()=> {
    console.log(`API está a correr na porta ${PORT}`);
})