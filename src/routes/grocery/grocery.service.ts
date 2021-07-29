import { Item, BaseItem } from "./grocery.interface";

//Sample data imports
import { groceryListSample } from "../../sample/groceryListSample";



/**
 * Methods used in the grocery endpoint
 */

/**
 * Gets an array of the values of all grocery items in the list
 * @returns Item[] a list of all items.
 */
export const getAll = async (): Promise<Item[]> => {
	return Object.values(groceryListSample);
};

/**
 * Get an Item by ID
 * @param id of the Item to retrieve
 * @returns the Item corresponding to the ID
 */
export const get = async (id: number): Promise<Item> => {
	return groceryListSample[id];
};

/**
 * Add a new grocery Item
 * @param newItem of new Item to add to the grocery list
 * @returns the new item
 */
export const create = async (newItem: BaseItem): Promise<Item> => {
	const id = new Date().valueOf();

	groceryListSample[id] = {
		id,
		...newItem
	};
	return groceryListSample[id];
};

/**
 * Remove a grocery Item
 * @param id of Item to remove
 * @return Item removed from grocery list
 */
export const remove = async (id: number): Promise<Item> => {
	const item = groceryListSample[id];
	if(item) {
		delete groceryListSample[id];
		return item;
	}
	return null;
};

/**
 * Updates an item with new info based on id
 * @param id of Item to update
 * @param update updated Item
 */
export const update = async (id: number, update: Item): Promise<Recipe> => {
	groceryListSample[id] = update;
	return groceryListSample[id];
};