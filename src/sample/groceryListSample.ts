import {Items} from "../routes/grocery/grocery.interface";

//Similar to SQL structure with column Id
export const groceryListSample: Items = {
	1: {
		name: "Beans",
		quantity: {
			count: 4,
			unit: "cans",
		},
		category: "Canned goods",
		id: 1
	},
	2: {
		name: "Canned Artichokes",
		quantity: {
			count: 2,
			unit: "cans",
		},
		category: "Canned goods",
		id: 2
	},
	3: {
		name: "Tomatoes",
		quantity: {
			count: 14,
			unit: "oz",
		},
		category: "Produce",
		id: 3
	},
	4: {
		name: "Lettuce",
		quantity: {
			count: 1,
			unit: "head",
		},
		category: "Produce",
		id: 4
	},
	5: {
		name: "Milk",
		quantity: {
			count: 2,
			unit: "gallons",
		},
		category: "Dairy & Eggs",
		id: 5
	},
	6: {
		name: "Paper Towels",
		quantity: {
			count: 1,
			unit: "roll",
		},
		category: "Household",
		id: 6
	},
	7: {
		name: "Popcorn",
		quantity: {
			count: 16,
			unit: "oz",
		},
		category: "Snacks",
		id: 7
	},
};

