/**
 * https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/
 */
import express, { Request, Response } from "express";
import {Item } from "./grocery.interface";
import * as GroceryService from "./grocery.service";

export const groceryRouter = express.Router();





/**
 * Controllers
 */

/**
 * Get a list of all grocery items
 */
groceryRouter.get("/", async (req: Request, res: Response) => {
	try {
		const items: Item[] = await GroceryService.getAll();
		res.status(200).send(items);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

/**
 * Get grocery item by ID
 */
groceryRouter.get("/:id", async (req: Request, res: Response) => {
	try {
		const item: Item = await GroceryService.get(parseInt(req.params.id));
		res.status(200).send(item);

	} catch (e) {
		res.status(500).send(e.message);
	}
});

/**
 * Post a new item to the grocery list
 */
groceryRouter.post("/", async (req: Request, res: Response) => {
	try {
		const item: BaseItem = req.body;
		const newItem = await GroceryService.create(item);
		res.status(201).json(newItem);
	} catch (e) {
		res.status(500).send(e.message);
	}
});