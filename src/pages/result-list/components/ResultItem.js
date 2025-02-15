import React from "react"

import ListButton from "./ListButton"
import '../../../styles/result-item.css'
import { useSelector, useDispatch } from "react-redux";
import { useAxios } from "../../../customized-hooks/useAxios"
import { setRecipe } from "../../../store/slices/recipe"
import { setIngredients } from "../../../store/slices/ingredients";
import { useNavigate } from "react-router-dom"
import { incrementPageNumber, decrementPageNumber } from "../../../store/slices/pageNumber"


export default function ResultItem() {
    
    const recipesList = useSelector(state => state.recipesList.value)
    const totalPages = Math.ceil(recipesList.length / 3)
    const { getRecipeDetails, getRecipeIngredients } = useAxios()
    const dispatch = useDispatch();
    const navigate = useNavigate();   
    
    const pageNumber = useSelector(state => state.pageNumber.value)
    const recipe = recipesList.slice(pageNumber * 3, (pageNumber * 3) +3).map(item => {

        // return of the map of the array
        return (
            <div onClick={() => getDetails(item.id)} className='element-container'> 
                <img src={item.image} alt="Missing recipe"/>
                <p>{item.title}</p>
            </div>
        )
    })

    function getDetails(id) {
        getRecipeDetails(id)
            .then(result => dispatch(setRecipe(result)))
            .then(getRecipeIngredients(id)
                    .then(result => dispatch(setIngredients(result)))
                 )
            .then(navigate('/searchresult/recipes/detail'))
    }

    // Functions to manage the list of recipes

    function handlePageForward() {
        if (!((pageNumber + 1) === totalPages)) {
            dispatch(incrementPageNumber())    
        }
    }

    function handlePageBackward() {
        if (pageNumber) {
            dispatch(decrementPageNumber())    
        }
    }

    // return of the component

    return (
        <>
            <div className="recipes-container">
                <div className="recipe">{recipe}</div>
            </div>
            <ListButton 
                forward={handlePageForward}
                backward={handlePageBackward}
                totalPages={totalPages}
            />
        </>
    )
}