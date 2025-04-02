import React from "react";
import '../styles/multipurpose-button.css'

// The component manages the different kind of buttons used in the pages of the app
// it accepts the parameter title which describes the function of the button
// The buttonFunction parameter manages the behaviour at the click of the button
 
export default function MultipurposeButton({title, buttonFunction}) {
    return (
        <button onClick={buttonFunction} className="button-to-home">{title}</button>
    )
}