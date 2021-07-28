/**
 * Contains models and interfaces for the /grocery api endpoint
 */


export interface BaseItem {
	name: string,
	quantity?: {
		count: number,
		unit?: string
	},
	category?: string,
	recipe?: string
}

export interface Item extends BaseItem {
	id: number
}

export interface Items {
	[key: number]: Item
}


