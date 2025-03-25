import React from "react";
import '../styles/multipurpose-button.css'

export default function MultipurposeButton({title, buttonFunction}) {
    return (
        <button onClick={buttonFunction} className="button-to-home">{title}</button>
    )
}