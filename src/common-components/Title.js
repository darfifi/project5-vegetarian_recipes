import React from "react"
import '../styles/title.css'

export default function Title({ title }) {
    return (
        <h1 className={`title-home title-details`}>{title}</h1>
    )
}

