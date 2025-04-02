import React from "react"
import '../styles/title.css'

// The component manages the main title of the page that is currently visualized on the screen

export default function Title({ title, details }) {
    return (
        <h1 className={`title-home ${details ? `title-details` : ``}`}>{title}</h1>
    )
}

