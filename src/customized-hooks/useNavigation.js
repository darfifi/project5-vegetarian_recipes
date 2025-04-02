
import { useNavigate } from "react-router-dom";

import { resetPageNumber } from "../store/slices/pageNumber";
import { resetList } from "../store/slices/recipesList";
import { useDispatch } from "react-redux";
import { resetRecipe } from "../store/slices/recipe"
import { resetIngredients } from "../store/slices/ingredients"
import { resetModalStatus } from "../store/slices/modalStatus";

// Customized hook that manages the functions to be used on the onclick events for the buttons used in the app pages

export function useNavigation() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const backToSearch = () => {
        dispatch(resetPageNumber())
        dispatch(resetList()) // Reset of the array defined by the recipesList slice
        navigate('/'); // Navigation to the home page
    };

    const backToResultsList = () => {
        dispatch(resetRecipe()) // Reset of the object recipe defined by the recipe slice
        dispatch(resetIngredients()) // Reset of the ingredients array 
        dispatch(resetModalStatus()) // Reset to the initial state values of the modalStatus slice associated to the Modal component
        navigate('/searchresult/recipes') // Navigation to the page of recipes list
    };

    return { backToSearch, backToResultsList };
}