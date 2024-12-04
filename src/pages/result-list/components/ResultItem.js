import React from "react"
import data from '../../../data.json'
import { useState } from "react"
import ListButton from "./ListButton"
import '../../../styles/result-item.css'

import { useSelector } from "react-redux";


export default function ResultItem() {
    
    const recipesList = useSelector(state => state.recipesList.value)

    // const recipesList = data.results   
    const [itemNumber, setItemNumber] = useState(0);

    const recipe = recipesList.slice(itemNumber, itemNumber +3).map(item => {

        // return of the map of the array
        return (
            
            <div className='element-container'> 
                <img src={item.image}/>
                <p>{item.title}</p>
            </div>
        )
    })

    function handlePageForward() {
        setItemNumber (prevItemNumber => {
            return prevItemNumber + 3
        })
    }

    function handlePageBackward() {
        setItemNumber (prevItemNumber => {
            return prevItemNumber - 3
        })
    }

    // return of the component

    return (
        <>
            <div className="elements-container">
                <div style={{display: 'flex', flexDirection: 'column'}}>{recipe}</div>
            </div>
            <ListButton 
                    forward={handlePageForward}
                    backward={handlePageBackward}
                />
        </>
    )
}