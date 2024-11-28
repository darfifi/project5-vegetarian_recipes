import React from "react";
import Title from "../../common-components/Title";
import Message from "./components/Message";
import ButtonToHome from "../../common-components/ButtonToHome";
import '../../styles/result-fail.css'


export default function ResultFail() {
    return (
        <>
            <div className="message-container">
                <Title title='Vegetarian Recipes' />
                <Message />
            </div>
            <div className="home-button-container">
                <ButtonToHome />
            </div>
        </>

    )
}