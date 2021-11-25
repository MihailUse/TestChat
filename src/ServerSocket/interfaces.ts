// for socket.emit()
interface IServerToClientEvents {
    message: (message: IMessage, userId: number) => void;
}

// for socket.on()
interface IClientToServerEvents {
    identity: (userId: number) => void;
    message: (message: IMessage, user: IUser) => void;
    disconnect: () => void;
}

interface ISocketData {
    id: number;
    name: string;
}


interface IUser {
    userId: number;
    socketId: string;
}

interface IMessage {
    roomId: string
    message: string
    author: number
    sendAt: Date
}