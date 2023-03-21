import { createContext } from 'react';
import { Receta } from '../../interfaces';

interface ContextProps {
    recetas: Receta[];
    // Methods
    getRecipes: () => Promise<void>;
    // "title": "alcachofery",
    // "preparation": "hervi esa mierda y arrebatala",
    // "category": "deseeerrt",
    // "tags": "sometagToDev",
    // "isFromTheMealDB": false,
    // "state": true
    postRecipes: (title: string, preparation: string, category: string[] | never[], cleanBoard: () => void, tags?: string, isFromTheMealDB?: boolean) => void;
}

export const RecipeContextMyOwnChefBook = createContext({} as ContextProps)