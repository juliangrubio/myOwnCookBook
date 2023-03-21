import { ReactNode, useReducer } from 'react';
import myOwnChefBookApi from '../../api/myOwnChefBookApi';
import themealdbApi from '../../api/themealdbApi';
import { MealsCategories } from '../../interfaces';

import { RecipeContextTheMealDB, recipeReducer, RecipeState } from '.';

const Recipe_INITIAL_STATE: RecipeState = {
    categories: [],
};

export const RecipeProviderTheMealDB = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(recipeReducer, Recipe_INITIAL_STATE);

    const getCategories = async () => {
        const resp = await themealdbApi.get<MealsCategories>('/list.php?c=list');
        // console.log(resp)
        dispatch({
            type: '[RECIPE] - GetCategories',
            payload: resp.data.meals
        })
    }

    return (
        <RecipeContextTheMealDB.Provider value={{
            ...state,

            getCategories,
        }}>
            {children}
        </RecipeContextTheMealDB.Provider>
    );
};