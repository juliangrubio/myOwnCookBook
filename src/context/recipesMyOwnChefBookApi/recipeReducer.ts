import { Receta, RecipeResponse } from "../../interfaces";

export interface RecipeState {
  recetas: Receta[];
}

type RecipeActionType = 
    | { type: "[RECIPE] - GetRecipes"; payload: Receta[] }
    | { type: "[RECIPE] - PostRecipes"; payload: Receta[] };

export const recipeReducer = (state: RecipeState, action: RecipeActionType): RecipeState => {
  
  switch (action.type) {
      case '[RECIPE] - GetRecipes':
          return {
              ...state,
              recetas: action.payload,
          };
      
      case '[RECIPE] - PostRecipes':
          return {
              ...state,
              recetas: [...action.payload]
          }

      default:
          return state;
  }
};
