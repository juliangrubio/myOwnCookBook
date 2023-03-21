import { ReactNode, useEffect, useReducer } from 'react';
import myOwnChefBookApi from '../../api/myOwnChefBookApi';
import { RecipeResponse } from '../../interfaces';

import { RecipeContextMyOwnChefBook, recipeReducer, RecipeState } from '.';
import { useToast } from '../../hooks/useToast';
import axios from "axios";

const Recipe_INITIAL_STATE: RecipeState = {
    recetas: [],
};

export const RecipeProviderMyOwnChefBookApi = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(recipeReducer, Recipe_INITIAL_STATE);
    const showToast = useToast();

    useEffect(() => {
        getRecipes();
    }, [])

    const getRecipes = async () => {
        const resp = await myOwnChefBookApi.get<RecipeResponse>('/recipes');
        dispatch({ type: '[RECIPE] - GetRecipes', payload: resp.data.recetas })
    }

    const postRecipes = async (
        title: string,
        preparation: string,
        category: string[] | never[],
        cleanBoard: () => void,
        tags: string = 'taguitos',
        isFromTheMealDB: boolean = false
    ) => {
        try {
            const resp = await myOwnChefBookApi.post<RecipeResponse>('/recipes', {
                title, preparation, category, tags, isFromTheMealDB
            });
            // dispatch({ type: '[RECIPE] - PostRecipes', payload: resp.data.recetas })
            // console.log(resp)
            if (resp.data.ok) {
                cleanBoard();
                showToast({
                    icon: 'success',
                    title: 'Exito...',
                    text: 'The recipe was successfully saved.',
                });
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                // console.log(error.response.data.msj);
                showToast({
                    icon: 'error',
                    title: 'Error...',
                    html: error.response.data.msj
                });
            } else {
                console.error(error);
            }
        }

    }

    return (
        <RecipeContextMyOwnChefBook.Provider value={{
            ...state,

            getRecipes,
            postRecipes,
        }}>
            {children}
        </RecipeContextMyOwnChefBook.Provider>
    );
};