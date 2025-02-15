import React from "react"
import '../styles/title.css'

export default function Title({ title, details }) {
    return (
        <h1 className={`title-home ${details ? `title-details` : ``}`}>{title}</h1>
    )
}

