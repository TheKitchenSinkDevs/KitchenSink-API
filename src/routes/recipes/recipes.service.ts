import { Recipe } from "@prisma/client";
import prisma from "../../lib/prisma";


import { recipeSample } from "../../sample/recipeSample";

/**
 * Methods used in the Recipes endpoint
 */

/**
 * Gets an array of all Recipes
 * @returns Recipes[] a list of all Recipes.
 */
export const getAll = async (): Promise<Recipe[]> => {
	const recipes = await prisma.recipe.findMany({});
	return recipes;
};

/**
 * Finds a recipe by ID
 * @param id of recipe
 * @returns Recipe
 */
export const get = async (id: number): Promise<Recipe> => {
	const recipe = await prisma.recipe.findUnique({
		where: {
			id: id
		}
	});
	return recipe;
};


export const create = async (newRecipe: Recipe): Promise<Recipe> => {
	const recipe = await prisma.recipe.create({
		data: newRecipe
	});
	return recipe;
};

export const remove = async (id: number): Promise<Recipe> => {
	try {
		const recipe = await prisma.recipe.delete({
			where: {
				id: id
			}
		});
		return recipe;
	} catch (e) {
		return null;
	}
};

export const update = async (id: number, update: Recipe): Promise<Recipe> => {
	const updated = await prisma.recipe.update({
		where: {
			id: id
		},
		data: update
	});
	return updated;
};