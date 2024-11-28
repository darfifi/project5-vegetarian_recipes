import React from "react";
import ingredientsData from '../../../ingredients.json'
import '../../../styles/recipe-ingredients.css'

export default function() {

    const ingredientsArray = ingredientsData.ingredients;

    const ingredientList = ingredientsArray.map(element => {
        return (
            <li>{element.amount.metric.value} {element.amount.metric.unit} {element.name}</li>
        )
    })

    return (
        <ul className="ingredients-list">
            {ingredientList}
        </ul>
    )
}