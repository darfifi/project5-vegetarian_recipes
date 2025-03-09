
import { useNavigate } from "react-router-dom";

import { resetPageNumber } from "../store/slices/pageNumber";
import { resetList } from "../store/slices/recipesList";
import { useDispatch } from "react-redux";
import { resetRecipe } from "../store/slices/recipe"
import { resetIngredients } from "../store/slices/ingredients"
import { resetModalStatus } from "../store/slices/modalStatus";

export function useNavigation() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const backToSearch = () => {
        dispatch(resetPageNumber())
        dispatch(resetList())
        navigate('/');
    };

    const backToResultsList = () => {
        dispatch(resetRecipe())
        dispatch(resetIngredients())
        dispatch(resetModalStatus())
        navigate('/searchresult/recipes')
    };

    return { backToSearch, backToResultsList };
}