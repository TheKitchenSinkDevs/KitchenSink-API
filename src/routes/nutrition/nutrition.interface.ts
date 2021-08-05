


export interface Nutrition extends BaseNutrition {
	other: {
		[key: string]: number
	}
}

export interface BaseNutrition {
	calories: number,
	fat: {
		totalFat: number,
		[key: string]: number
	},
	carb: {
		totalCarb: number,
		[key: string]: number
	},
	protien: number,
}