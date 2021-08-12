/**
 * https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/
 */
import { GroceryItem } from "@prisma/client";
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
		const items: GroceryItem[] = await GroceryService.getAll();
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
		const item: GroceryItem = await GroceryService.get(id);
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
		if (req.body.name == null) {
			res.status(400).send("Missing required parameter: name");
			return;
		}
		const item: GroceryItem = req.body;
		const result = await GroceryService.create(item);
		res.status(201).json(result);
	} catch (e) {
		res.status(500).send(e.message);
	}
});


groceryRouter.put("/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id);
	if (!id) {
		res.status(400).send("No id given");
	}
	try {

		const old: GroceryItem = await GroceryService.get(id);
		if (old) {
			const updatedItem = await GroceryService.update(id, req.body);
			return res.status(200).json(updatedItem);
		}
		res.status(400).send("GroceryItem with ID " + id + " not found.");

	} catch (e) {
		res.status(500).send(e.message);
	}
});

groceryRouter.delete("/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id);
	if (!id) {
		res.status(400).send("No id given");
	}
	try {
		const toDelete: GroceryItem = await GroceryService.remove(id);
		if (!toDelete) {
			res.status(400).send("GroceryItem with ID " + id + " not found.");
		}
		res.status(200).json(toDelete);
	} catch (e) {
		res.status(200).json(e.message);
	}
});