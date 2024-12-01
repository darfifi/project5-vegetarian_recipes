
import React from "react";
import Title from "../../common-components/Title";
import ResultItem from '../result-list/components/ResultItem'
import ButtonToHome from "../../common-components/ButtonToHome";
import Subtitle from "./components/Subtitle";

import Layout from "../../common-components/Layout";


export default function ResultList() {

    return (
        <Layout>
            <Title title='Vegetarian Recipes'/>
            <ButtonToHome />
            <Subtitle />
            <ResultItem />
        </Layout>
        
    )
}