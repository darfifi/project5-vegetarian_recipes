import React from "react";
import '../../../styles/recipe-ingredients.css'
import { useSelector } from "react-redux";

// The component returns the ingredients of a specific recipe  

export default function RecipeIngredients() {

    const ingredients = useSelector(state => state.ingredients.value)
    const ingredientsList = ingredients.map(element => {
        return (
            <li>{element.amount.us.value} {element.amount.us.unit} {element.name}</li>
        )
    })

    return (
        <div className="ingredients-list-container">
            <ul className="ingredients-list">
                {ingredientsList}
            </ul>
        </div>
    )
}