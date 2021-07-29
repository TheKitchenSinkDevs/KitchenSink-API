import { Item } from "../grocery/grocery.interface";
import { Recipe } from "./recipes.interface";

import { recipeSample } from "../../sample/recipeSample";


export const getAll = async (): Promise<Recipe[]> => {
	return Object.values(recipeSample);
};

export const get = async (id: number): Promise<Recipe> => {
	return recipeSample[id];
};

export const create = async (newRecipe: Recipe): Promise<Item> => {
	const id = new Date().valueOf();

	recipeSample[id] = {
		newRecipe
	};

	return recipeSample[id];
};

export const remove = async (id: number): Promise<Recipe> => {
	const recipe = recipeSample[id];
	if(recipe) {
		delete recipeSample[id];
		return recipe;
	}
	return null;
};

export const update = async (id: number, update: Recipe): Promise<Recipe> => {
	recipeSample[id] = update;
	return recipeSample[id];
};