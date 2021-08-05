/**
 * Contains models and interfaces for the /grocery api endpoint
 */

import { Nutrition } from "../nutrition/nutrition.interface";


export interface BaseItem {
	name: string,
	quantity?: {
		count: number,
		unit?: string
	},
	category?: string,
	recipe?: string | number
	nutrition?: Nutrition
}

export interface Item extends BaseItem {
	id: number
}

export interface Items {
	[key: number]: Item
}


