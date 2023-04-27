import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("A Tasty Schnitzel", "This is simply a test",
      "https://www.tasteatlas.com/images/recipes/b9a4ef27597647adb1015fb98b33e110.jpg",
      [
        new Ingredient("Meat", 1),
        new Ingredient("French Fries", 20),
      ]),
    new Recipe("Big Fat Burger", "This is simply a test",
      "https://www.tasteatlas.com/images/recipes/b9a4ef27597647adb1015fb98b33e110.jpg",
      [
        new Ingredient("Buns", 2),
        new Ingredient("Meat", 2)
      ]),
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
