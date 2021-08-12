
import prisma from "../../lib/prisma";

//Sample data imports
//import { groceryListSample } from "../../sample/groceryListSample";
import { GroceryItem } from "@prisma/client";



/**
 * Methods used in the grocery endpoint
 */

/**
 * Gets an array of the values of all grocery items in the list
 * @returns Item[] a list of all items.
 */
export const getAll = async (): Promise<GroceryItem[]> => {
	const items = await prisma.groceryItem.findMany({});
	return items;
};

/**
 * Get an Item by ID
 * @param id of the Item to retrieve
 * @returns the Item corresponding to the ID
 */
export const get = async (id: number): Promise<GroceryItem> => {
	const item = await prisma.groceryItem.findUnique({
		where: {
			id: id
		}
	});
	return item;
};

/**
 * Add a new grocery Item
 * @param newItem of new Item to add to the grocery list
 * @returns the new item
 */
export const create = async (newItem: GroceryItem): Promise<GroceryItem> => {
	const result = await prisma.groceryItem.create({
		data: newItem
	});
	return result;
};

/**
 * Remove a grocery Item
 * @param id of Item to remove
 * @return Item removed from grocery list
 */
export const remove = async (id: number): Promise<GroceryItem> => {
	try {
		const item = await prisma.groceryItem.delete({
			where: {
				id: id
			}
		});
		return item;
	} catch (e) {
		return null;
	}
};

/**
 * Updates an item with new info based on id
 * @param id of Item to update
 * @param update updated Item
 */
export const update = async (id: number, update: GroceryItem): Promise<GroceryItem> => {
	const updated = await prisma.groceryItem.update({
		where: {
			id: id
		},
		data: update
	});
	return updated;
};