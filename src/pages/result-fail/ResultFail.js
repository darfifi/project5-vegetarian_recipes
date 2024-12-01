import React from "react";
import Title from "../../common-components/Title";
import Message from "./components/Message";
import ButtonToHome from "../../common-components/ButtonToHome";
import '../../styles/result-fail.css'

import Layout from "../../common-components/Layout";


export default function ResultFail() {
    return (
        <Layout>
            <Title title='Vegetarian Recipes' />
            <Message />
            <ButtonToHome />
        </Layout>
    )
}