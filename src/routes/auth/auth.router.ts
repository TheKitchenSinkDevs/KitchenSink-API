import express, { Request, Response } from "express";
import prisma from "src/lib/prisma";


export const authRouter = express.Router();

/**
 * Get authentication token and create user if new
 */
authRouter.post("/login", (req: Request, res: Response) => {

});


/**
 * Update a user's info
 */
authRouter.put("/", (req: Request, res: Response) => {

});