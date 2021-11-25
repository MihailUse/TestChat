import { Router, Request, Response } from "express";


export const mainRouter: Router = Router();

mainRouter.get('/', async (req: Request, res: Response): Promise<void> => {
    res.send("It just work!");
});

mainRouter.get('/documentation', async (req: Request, res: Response): Promise<void> => {
    res.send("This page should contain documentation");
});
