import React from "react";
import "../styles/modal.css"
import { useSelector } from "react-redux"

// The component manages the loading message during the searching status or an error message whenever an error occurs

export default function Loading({message, subMessage}) {

    let modalStatus = useSelector(state => state.modalStatus.value)

    return (
        <div className="message-window">
            <h1 className={`${modalStatus.loading ? 'primary-message' : ''} + ${modalStatus.error.status ? 'error-message' : ''}`}>{message}</h1>
            {subMessage && <p className="error-description">{subMessage}</p>}
        </div>
    )
}