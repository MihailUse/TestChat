import express, { Application, Request, Response } from 'express'
import { Server } from "socket.io";
import logger from "morgan";
import http from "http";
import { apiRouter } from "./mainRouter";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const server: http.Server = http.createServer(app);
const io: Server = new Server(server);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);

app.get('/', async (req: Request, res: Response): Promise<void> => {
    res.json({
        "message": "okeeeeee"
    });
});

io.on('connection', (socket) => {
    let UserName = 'Socket_' + (socket.id).toString();

    socket.emit('userName', UserName);
    console.log('a user connected: ', UserName);


    socket.on('message', function (msg) {
        io.sockets.emit('messageToClients', msg, UserName); // sending event 'messageToClients' to another users with params
    });

});

server.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})