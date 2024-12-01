import React from "react";
import descriptionData from '../../../details.json'
import '../../../styles/recipe-description.css'

export default function() {
    return (
        <>
            <h1 className="recipe-description-title">Instructions</h1>
            <p className="recipe-description">{descriptionData.instructions}</p>
        </>
    )
}