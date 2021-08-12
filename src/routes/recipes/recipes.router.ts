import express, { Request, Response } from "express";
import { Recipe } from "@prisma/client";

import { Nutrition, BaseNutrition } from "../nutrition/nutrition.interface";

import * as RecipeService from "./recipes.service";

export const recipeRouter = express.Router();


recipeRouter.get("/", async (req: Request, res: Response) => {
	try {
		const recipes: Recipe[] = await RecipeService.getAll();
		res.status(200).send(recipes);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

recipeRouter.get("/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id);
	try {
		const recipe: Recipe = await RecipeService.get(id);
		res.status(200).send(recipe);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

recipeRouter.post("/", async (req: Request, res: Response) => {
	try {
		if (req.body.name == null) {
			res.status(400).send("Missing required parameter: name");
			return;
		}
		const recipe: Recipe = req.body;
		const newRecipe = await RecipeService.create(recipe);
		res.status(201).json(newRecipe);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

recipeRouter.put("/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id);
	if (!id) {
		res.status(400).send("No id given");
	}

	try {
		const old: Recipe = await RecipeService.get(id);
		if (old) {
			const updatedRecipe = await RecipeService.update(id, req.body);
			res.status(200).json(updatedRecipe);
		}

		res.status(400).send("Recipe with ID " + id + " not found.");
	} catch (e) {
		res.status(500).send(e.message);
	}
});


recipeRouter.delete("/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id);
	if (!id) {
		res.status(400).send("No id given");
	}
	try {
		const toDelete: Recipe = await RecipeService.remove(id);
		if (!toDelete) {
			res.status(400).send("Recipe with ID " + id + " not found.");
		}
		res.status(200).json(toDelete);
	} catch (e) {
		res.status(500).send(e.message);
	}
});