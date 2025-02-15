import React from "react"
import Title from "../../common-components/Title"
import '../../styles/result-detail.css'
import RecipeIngredients from "./components/RecipeIngredients"
import RecipeDescription from "./components/RecipeDescription"
import MultipurposeButton from "../../common-components/MultipurposeButton"
import Layout from "../../common-components/Layout"
import { useNavigation } from "../../customized-hooks/useNavigation"
import { useSelector } from "react-redux"

export default function ResultDetail() {

    const { backToResultsList } = useNavigation(); 
    const recipe = useSelector(state => state.recipe.value);

    return (
        <Layout>
            <Title 
                title={recipe.title} 
                details={true}
            />
            <MultipurposeButton 
                title={'Back to recipes list'}
                buttonFunction={backToResultsList}
            />
            <div className="general-box">
                <div className="left-box">
                    <img className='detail-image' src={recipe.image}/>
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


