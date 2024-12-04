import { configureStore } from "@reduxjs/toolkit";
import recipeListReducer from './pages/home-page/home-page-slices/recipesList'
import searchStringReducer from './pages/home-page/home-page-slices/searchString'

export const store = configureStore({

    reducer: {
        recipesList: recipeListReducer,
        searchString: searchStringReducer,
    }
});

