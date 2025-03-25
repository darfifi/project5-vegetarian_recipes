import { configureStore } from "@reduxjs/toolkit";
import recipeListReducer from "../store/slices/recipesList"
import searchStringReducer from './slices/searchString'
import ingredientsReducer from "../store/slices/ingredients"
import recipeReducer from './slices/recipe'
import modalStatusReducer from './slices/modalStatus'
import pageNumberReducer from "./slices/pageNumber";
import nutritionFactsReducer from "./slices/nutritionFacts";


export const store = configureStore({

    reducer: {
        recipesList: recipeListReducer,
        searchString: searchStringReducer,
        recipe: recipeReducer,
        ingredients: ingredientsReducer,
        modalStatus: modalStatusReducer,
        pageNumber: pageNumberReducer,
        nutritionFacts: nutritionFactsReducer
    }
});

