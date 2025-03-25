import React from "react";
import '../../../styles/recipe-description.css'
import { useSelector } from "react-redux";

export default function RecipeDescription() {

    const recipe = useSelector(state => state.recipe.value)

    // Because the format of the instrucions is HTML it needs a parsing of the text in order to have only the description text
    const parser = new DOMParser()
    const doc = parser.parseFromString(recipe.instructions, 'text/html')
    const description = doc.body.textContent || ""

    return (
        <>
            <h1 className="recipe-description-title">Instructions</h1>
            <p className="recipe-description">{description}</p>
        </>
    )
}