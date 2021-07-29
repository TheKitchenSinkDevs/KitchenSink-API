import express, { Request, Response } from "express";
import { Recipe } from "./recipes.interface";
import { Item } from "../grocery/grocery.interface";
import { Nutrition, BaseNutrition } from "../nutrition/nutrition.interface";

import * as RecipeService from "./recipes.service";

export const recipeRouter = express.Router();


