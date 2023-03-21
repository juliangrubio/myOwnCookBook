import { createContext } from 'react';
import { Meal } from '../../interfaces';

interface ContextProps {
    categories: Meal[];
    // Methods
    getCategories: () => void;
}

export const RecipeContextTheMealDB = createContext({} as ContextProps)