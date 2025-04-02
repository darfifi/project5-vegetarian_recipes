import React from "react";
import "../styles/modal.css"

// The component manages a modal window whenever it is needed

export default function Modal({children}) {
    return (
        <div className="modal-window">
            {children}
        </div>
    )
}