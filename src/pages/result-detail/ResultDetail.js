import React from "react"
import recipeDetails from '../../details.json'
import Title from "../../common-components/Title"
import '../../styles/result-detail.css'
import RecipeIngredients from "./components/RecipeIngredients"
import RecipeDescription from "./components/RecipeDescription"
import { useState, useEffect } from "react"



export default function ResultDetail() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        // Cleanup del listener quando il componente viene smontato
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    
    return (

        <div style={{width: `${windowWidth}px`}} className="general-container">
            <div className="blank-container"></div>
            <div className="detail-page-container">
                <Title title={recipeDetails.title} />
                <p>{windowWidth}</p>
                <div style={{width: `calc(${windowWidth}px - 65%)`}}  className="general-box">

                    <div className="left-box">
                        <img className='detail-image' src={recipeDetails.image}/>
                        <RecipeIngredients />
                    </div>
                    <div className="right-box">
                        <RecipeDescription style={{backgroundColor: 'yellow'}}/>
                    </div>

                </div>
            </div>

        </div>
    )
}


