
import { useNavigate } from "react-router-dom";

import { resetPageNumber } from "../store/slices/pageNumber";
import { resetList } from "../store/slices/recipesList";
import { useDispatch } from "react-redux";


export function useNavigation() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const backToSearch = () => {
        dispatch(resetPageNumber())
        dispatch(resetList())
        navigate('/');
    };

    const backToResultsList = () => {
        navigate('/searchresult/recipes')
    };

    return { backToSearch, backToResultsList };
}