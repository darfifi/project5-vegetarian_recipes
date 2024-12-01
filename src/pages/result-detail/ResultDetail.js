import React from "react"
import recipeDetails from '../../details.json'
import Title from "../../common-components/Title"
import '../../styles/result-detail.css'
import RecipeIngredients from "./components/RecipeIngredients"
import RecipeDescription from "./components/RecipeDescription"
import ButtonToHome from "../../common-components/ButtonToHome"
import Layout from "../../common-components/Layout"



export default function ResultDetail() {

    return (

        <Layout>
            <Title title={recipeDetails.title} />
            <ButtonToHome />
            <div className="general-box">
                <div className="left-box">
                    <img className='detail-image' src={recipeDetails.image}/>
                    <RecipeIngredients />
                </div>
                <div className="right-box">
                    <RecipeDescription />
                </div>
            </div>
            {/*
            <div className="iframe-container">
                <iframe src='https://api.spoonacular.com/recipes/655575/nutritionLabel?apiKey=bb20efb7b3a3496ba813cf00c622777a' style={{
                    width: "100%", height: "600px", border: "none"}} />
                <div className="nutrition-facts-clickable-container"></div>
            </div>
            */}
        </Layout>
    )
}


