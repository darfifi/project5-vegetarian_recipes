import React from "react"
import Title from "../../common-components/Title"
import '../../styles/result-detail.css'
import RecipeIngredients from "./components/RecipeIngredients"
import RecipeDescription from "./components/RecipeDescription"
import MultipurposeButton from "../../common-components/MultipurposeButton"
import Layout from "../../common-components/Layout"
import { useNavigation } from "../../customized-hooks/useNavigation"
import { useSelector } from "react-redux"

// The component returns the page with the list of recipes (3 recipes/each page)

export default function ResultDetail() {

    const { backToResultsList } = useNavigation(); 
    const recipe = useSelector(state => state.recipe.value);
    const nutritionFacts = useSelector(state => state.nutritionFacts.value)

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
            
            <div className="nutrition-fact-container">
                <img className="nutrition-fact-image" src={nutritionFacts}></img>
            </div>
        </Layout>
    )
}


