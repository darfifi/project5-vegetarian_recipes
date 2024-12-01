import React from "react";
import Title from "../../common-components/Title";
import Message from "./components/Message";
import MultipurposeButton from "../../common-components/MultipurposeButton";
import '../../styles/result-fail.css'

import { useNavigation } from "../../customized-hooks/useNavigation";

import Layout from "../../common-components/Layout";


export default function ResultFail() {

    const {backToSearch} = useNavigation();

    return (
        <Layout>
            <Title title='Vegetarian Recipes' />
            <Message />
            <MultipurposeButton 
                title={'Back'}
                buttonFunction={backToSearch}
            />
        </Layout>
    )
}