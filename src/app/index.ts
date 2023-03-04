import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import { route } from "./routes";

dotenv.config();


const app = express();


const PORT = process.env.PORT || 8081;




const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: "*",
    preflightContinue: false,
  };
  


app.use(cors(options));
app.use(express.json());

app.use(express.urlencoded({extended: true}));



route(app);


app.listen(PORT, ()=> {
    console.log(`API está a correr na porta ${PORT}`);
})