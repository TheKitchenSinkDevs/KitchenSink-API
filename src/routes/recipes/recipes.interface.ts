/**
 * Contains models and interfaces for the /grocery api endpoint
 */

import { Item } from "../grocery/grocery.interface";
import { Nutrition } from "../nutrition/nutrition.interface";

export interface Recipe {
	name: string,
	servings?: number,
	link?: string,
	ingredients: Item[],
	nutrition: Nutrition,
	categories?: string[],
	directions?: string[],
	description?: string
}

export interface Recipes {
	[key: number]: Recipe
}
