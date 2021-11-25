import { Router, Request, Response } from "express";
import { User } from "./database/models/User";


export const apiRouter: Router = Router();

apiRouter.post('/create', async (req: Request, res: Response): Promise<void> => {
    const { login, password } = req.body;

    const user: User = await User.create({
        login: login,
        password: password
    });

    res.json({ user });
});

apiRouter.post('/delate', async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.body;

    const user: User = await User.findByPk(userId);
    user.destroy();

    res.json({ user });
});

apiRouter.post('/getUser', async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.body;

    const user: User = await User.findByPk(userId);

    res.json({ user });
});
