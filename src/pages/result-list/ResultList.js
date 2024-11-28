
import React from "react";
import Title from "../../common-components/Title";
import ResultItem from '../result-list/components/ResultItem'
import ButtonToHome from "../../common-components/ButtonToHome";
import Subtitle from "./components/Subtitle";


export default function ResultList() {

    // Object definition for styling

    const titleContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    return (
        <div className="bimbo">
            <Title title='Vegetarian Recipes'/>
            <ButtonToHome />
            <Subtitle />
            <ResultItem />    
        </div>
    )
}