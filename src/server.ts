import express, { Application, Request, Response } from 'express'
import logger from "morgan";
import http from "http";
import { apiRouter } from "./apiRouter";
import ServerSocket from "./ServerSocket/ServerSocket";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const server: http.Server = http.createServer(app);
const serverSocket: ServerSocket = new ServerSocket(server);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', apiRouter);
app.use('/', apiRouter);


serverSocket.listen(process.env.PORT);