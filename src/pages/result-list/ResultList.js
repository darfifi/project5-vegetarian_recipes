
import React from "react";
import Title from "../../common-components/Title";
import ResultItem from '../result-list/components/ResultItem'
import MultipurposeButton from "../../common-components/MultipurposeButton";
import Subtitle from "./components/Subtitle";

import { useNavigation } from "../../customized-hooks/useNavigation";

import Layout from "../../common-components/Layout";


export default function ResultList() {
    
    const { backToSearch } = useNavigation();
   
    return (
        <Layout>
            <Title title='Vegetarian Recipes'/>
            <MultipurposeButton 
                title={'New search'}
                buttonFunction={backToSearch}
            />
            <Subtitle />
            <ResultItem />
        </Layout>
    )
}