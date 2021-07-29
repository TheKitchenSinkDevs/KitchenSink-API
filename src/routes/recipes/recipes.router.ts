import express, { Request, Response } from "express";
import { Recipe } from "./recipes.interface";
import { Item } from "../grocery/grocery.interface";
import { Nutrition, BaseNutrition } from "../nutrition/nutrition.interface";

import * as RecipeService from "./recipes.service";

export const recipeRouter = express.Router();


recipeRouter.get("/", async (req: Request, res: Response) => {
	try{
		const recipes: Recipe[] = await RecipeService.getAll();
		res.status(200).send(recipes);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

recipeRouter.get("/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id);
	try{
		const recipe: Recipe = await RecipeService.get(id);
		res.status(200).send(recipe);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

recipeRouter.post("/", async (req: Request, res: Response) => {
	try{
		const recipe: Recipe = req.body;
		const newRecipe = await RecipeService.create(recipe);
		res.status(201).json(newRecipe);
	} catch (e) {
		res.status(500).send(e.message);
	}
});

recipeRouter.put("/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id);

	try{
		const update: Recipe = req.body;

		const old: Recipe = await RecipeService.get(id);

		if(old) {
			const updatedRecipe = await RecipeService.update(id, update);
			res.status(200).json(updatedRecipe);
		}

		res.status(400).send(null);
	} catch (e) {
		res.status(500).send(e.message);
	}
});


recipeRouter.delete("/:id", async (req: Request, res: Response) => {
	const id: number = parseInt(req.params.id);
	try{
		const toDelete: Recipe = await RecipeService.remove(id);

		res.status(201).json(toDelete);
	} catch (e) {
		res.status(500).send(e.message);
	}
});