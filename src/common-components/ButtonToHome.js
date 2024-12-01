import React from "react";
import '../styles/button-to-home.css'

export default function({funzione}) {
    return (
        <button onClick={funzione} className="button-to-home">Back to Home</button>
    )
}