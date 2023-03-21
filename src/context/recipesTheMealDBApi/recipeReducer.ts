import { Meal } from "../../interfaces";

export interface RecipeState {
  categories: Meal[];
}

type RecipeActionType = 
    | { type: "[RECIPE] - GetCategories"; payload: Meal[] };

export const recipeReducer = (state: RecipeState, action: RecipeActionType): RecipeState => {
  
  switch (action.type) {
      case '[RECIPE] - GetCategories':
          return {
              ...state,
              categories: action.payload,
          };

      default:
          return state;
  }
};
