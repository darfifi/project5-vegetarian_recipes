
import React from "react";
import Title from "../../common-components/Title";
import ResultItem from '../result-list/components/ResultItem'
import ButtonToHome from "../../common-components/ButtonToHome";
import Subtitle from "./components/Subtitle";
import { useNavigate } from "react-router-dom";

import Layout from "../../common-components/Layout";


export default function ResultList() {
    
    const navigate = useNavigate();

    function prova() {
        navigate('/')
    }

    return (
        <Layout>
            <Title title='Vegetarian Recipes'/>
            <ButtonToHome funzione={prova}/>
            <Subtitle />
            <ResultItem />
        </Layout>
        
    )
}