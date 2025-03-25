import React from "react"
import ListButton from "./ListButton"
import '../../../styles/result-item.css'
import { useSelector, useDispatch } from "react-redux";
import { useAxios } from "../../../customized-hooks/useAxios"
import { API_KEY } from "../../../config";
import { setRecipe } from "../../../store/slices/recipe"
import { setIngredients } from "../../../store/slices/ingredients";
import { setNutritionFacts } from "../../../store/slices/nutritionFacts";
import { setError, setLoading } from "../../../store/slices/modalStatus";
import { useNavigate } from "react-router-dom"
import { incrementPageNumber, decrementPageNumber } from "../../../store/slices/pageNumber"
import { useState } from "react";

export default function ResultItem() { 
    const recipesList = useSelector(state => state.recipesList.value)
    const totalPages = Math.ceil(recipesList.length / 3)
    const { getRecipeDetails, getRecipeIngredients } = useAxios()
    const dispatch = useDispatch();
    const navigate = useNavigate();   
    const pageNumber = useSelector(state => state.pageNumber.value)
    const [buttonState, setButtonState] = useState(
        {
            backward: true, 
            forward: false
        });  

    const recipe = recipesList.slice(pageNumber * 3, (pageNumber * 3) +3).map(item => {
        // return of the map of the array
        return (
            <div onClick={() => getDetails(item.id)} className='element-container'> 
                <img src={item.image} alt="Missing recipe" className="recipe-image"/>
                <p className="recipe-title">{item.title}</p>
            </div>
        )
    })

      // Functions to get details of receipes

    function getNutritionFacts(id) {
        return `https://api.spoonacular.com/recipes/${id}/nutritionLabel.png?apiKey=${API_KEY}`  
    }

    function getDetails(id) {

        dispatch(setLoading())
        dispatch(setNutritionFacts(getNutritionFacts(id)))

        getRecipeDetails(id)
            .then(result => dispatch(setRecipe(result)))
            .then(getRecipeIngredients(id)
                    .then(result => dispatch(setIngredients(result)))
                    .catch(error => dispatch(setError(error)))
                 )
            .then(navigate('/searchresult/recipes/detail'))
            .catch(error => dispatch(setError(error)))
    }

    // Functions to manage the pages showing the list of recipes

    function handlePageForward() {
        if (!((pageNumber + 1) === totalPages)) {
            setButtonState(false)
            dispatch(incrementPageNumber())
            if (pageNumber === totalPages - 2) {
                setButtonState({backward: false, forward: true})
            }
        }
    }

    function handlePageBackward() {
        if (pageNumber) {
            setButtonState(false)
            dispatch(decrementPageNumber()) 
            if (pageNumber === 1) {
                setButtonState({backward: true, forward: false})
            }   
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
                buttonState={buttonState}
            />
        </>
    )
}