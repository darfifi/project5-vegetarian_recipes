import axios from "axios";

export function useAxios() {

    const getRecipesList = async (url) => {
        const result = await axios.get(url);
        return result.data.results;
    }

    const getRecipeDetails = (id) => {
        const url = 'giggi';
        return axios.get(url).then (result => alert(result)) 
    }

    return { getRecipesList, getRecipeDetails }

}

