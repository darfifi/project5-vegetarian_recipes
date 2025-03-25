import React from "react";
import "../styles/modal.css"

export default function Modal({children}) {
    return (
        <div className="modal-window">
            {children}
        </div>
    )
}