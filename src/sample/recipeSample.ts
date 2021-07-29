import { Recipe, Recipes } from "src/routes/recipes/recipes.interface";


export const recipeSample: Recipes = {
	1: {
		name: "Chana Masala",
		categories: [
			"Lunch",
			"Dinner",
			"Meal Prep",
			"Easy to Cook"
		],
		ingredients: [
			{
				name: "Chickpeas",
				quantity: {
					count: 30,
					unit: "oz"
				},
				category: "Canned goods",

			},
			{
				name: "Rotel Tomatoes",
				quantity: {
					count: 30,
					unit: "oz"
				},
				category: "Canned goods",

			},
			{
				name: "Peas",
				quantity: {
					count: 14,
					unit: "oz"
				},
				category: "Produce",

			}
		],
		nutrition: {
			calories: 500,
			protien: 25,
			carbs: 50,
			fat: 22
		},
		servings: 4,
		description: "Chana masala, also known as channay, chole masala, chhole masala, chole or chholay, is a dish originating from the Indian subcontinent. The main ingredient is a variety of chickpea called chana or kala chana"
	},
	2: {
		name: "Tacos",
		categories: [
			"Lunch",
			"Dinner"
		],
		ingredients: [
			{
				name: "Black Beans",
				quantity: {
					count: 15,
					unit: "oz"
				},
				category: "Canned goods",

			},
			{
				name: "Ground Turkey, 99% Lean",
				quantity: {
					count: 16,
					unit: "oz"
				},
				category: "Meat",

			},
			{
				name: "Tortillas, Corn",
				quantity: {
					count: 10
				},
				category: "Dry goods",

			}
		],
		nutrition: {
			calories: 500,
			protien: 25,
			carbs: 50,
			fat: 22
		},
		servings: 4,
		description: "A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand."
	},
	3: {
		name: "Waffles",
		categories: [
			"Breakfast",
		],
		ingredients: [
			{
				name: "Flour",
				quantity: {
					count: 1,
					unit: "cup"
				},
				category: "Canned goods",

			},
			{
				name: "Water",
				quantity: {
					count: 240,
					unit: "ml"
				}

			},
			{
				name: "Egg",
				quantity: {
					count: 2
				},
				category: "Dairy",
			}
		],
		nutrition: {
			calories: 500,
			protien: 25,
			carbs: 50,
			fat: 22
		},
		servings: 4,
		description: "A waffle is a dish made from leavened batter or dough that is cooked between two plates that are patterned to give a characteristic size, shape, and surface impression. There are many variations based on the type of waffle iron and recipe used."
	},
	4: {
		name: "Sandwich",
		categories: [
			"Lunch",
			"Meal Prep",
			"Cold"
		],
		ingredients: [
			{
				name: "Bread",
				quantity: {
					count: 1,
					unit: "loaf"
				},
				category: "Breads",

			},
			{
				name: "Sliced Cheddar",
				quantity: {
					count: 6,
					unit: "slices"
				},
				category: "Deli",

			},
			{
				name: "Sliced Ham",
				quantity: {
					count: 14,
					unit: "oz"
				},
				category: "Deli",

			},
			{
				name: "Mayo",
				quantity: {
					count: 4,
					unit: "oz"
				},
				category: "Condiments and Sauces",

			},
		],
		nutrition: {
			calories: 500,
			protien: 25,
			carbs: 50,
			fat: 22
		},
		servings: 4,
		description: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type"
	}
};