import React from "react";
import '../../../styles/info-detail.css'
import { useState } from "react";
import Modal from "../../../common-components/Modal";

// Component to be visualized when "About vegetarian Recipes" link is clicked on
// The component gives minimal information on the app and on the developer

export default function About() {

    const [info, setInfo] = useState(false) // Local state that activates the modal window visualization

    return (
        <div className="about-general-container">
            <div className="info-link" onClick={() => setInfo(true)}>About Vegetarian Recipes</div>
            {info && <Modal> 
                <div className="info-container">
                    <div className="info-container-closing-button" onClick={() => setInfo(false)}><p>X</p></div>
                    <h3 className="info-title">VEGETARIAN RECIPES</h3>
                    <p className="info-container-description">This app makes you able to search vegetarian recipes 
                        writing a simple or complex search string in the search bar, e.g. "pasta" or "pasta with tomatoes"... 
                    </p>
                    <p className="info-container-description">
                        All results come from a third party source. The developer is not responsible for 
                        any incorrect or missing information.
                    </p>
                    <br></br>
                    <p>App created by</p>
                    <br></br>
                    <p>Dario Fresi</p>
                    <p>Full Stack Developer</p>
                    <p>dario.fresi@gmail.com</p>
                </div>
            </Modal>}
        </div>
    )
}