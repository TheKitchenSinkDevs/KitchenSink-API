/**
 * https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/
 */
import express, { Request, Response } from "express";
import { Item, BaseItem } from "./grocery.interface";
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
	const id: number = parseInt(req.params.id);
	try {
		const item: Item = await GroceryService.get(id);
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


groceryRouter.put("/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id);
	try{
		const update: Item = req.body;

		const old: Item = await GroceryService.get(id);

		if(old) {
			const updatedItem = await GroceryService.update(id, update);
			return res.status(200).json(updatedItem);
		}
		res.status(400).send(null);

	} catch (e) {
		res.status(500).send(e.message);
	}
});

groceryRouter.delete("/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id);
	try {
		const toDelete: Item = await GroceryService.remove(id);
		res.status(201).json(toDelete);
	} catch(e) {
		res.status(200).json(e.message);
	}
});