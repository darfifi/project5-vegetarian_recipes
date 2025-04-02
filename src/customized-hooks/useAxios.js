import axios from "axios";
import { API_KEY } from "../config";

// Customized hook that manages the API calls 

export function useAxios() {

    const getRecipesList = async (searchString) => {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=vegetarian&query=${searchString}&number=15`
        const result = await axios.get(url);
        return result.data.results;    
    }

    const getRecipeDetails = async (id) => {
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        const result = await axios.get(url)
        return result.data; 
    }

    const getRecipeIngredients = async(id) => {
        const url = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${API_KEY}`
        const result = await axios.get(url)
        return result.data.ingredients;
    }

    return { getRecipesList, getRecipeDetails, getRecipeIngredients }

}

