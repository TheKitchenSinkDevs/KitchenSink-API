/**
 * Methods used in the grocery endpoint
 */

import { Item, BaseItem } from "./grocery.interface";

//Sample data imports
import {groceryListSample} from "../../sample/groceryListSample";

/**
 * Gets an array of the values of all grocery items in the list
 * @returns Item[] a list of all items.
 */
export const getAll = async (): Promise<Item[]> => {
	return Object.values(groceryListSample);
};

export const get = async (id: number): Promise<Item> => {
	return groceryListSample[id];
};

export const create = async (newItem: BaseItem): Promise<Item> => {
	const id = new Date().valueOf();

	groceryListSample[id] = {
		id,
		...newItem
	};
	return groceryListSample[id];
};