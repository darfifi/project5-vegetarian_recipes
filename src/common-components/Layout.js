import React from "react";
import '../styles/result-detail-layout.css'
import { useState, useEffect } from "react"

export default function({children}) {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
        window.addEventListener("resize", handleResize);

        // Cleanup del listener quando il componente viene smontato
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <div style={{width: `${windowSize.width}px`, height: `${windowSize.height}px`}} className="general-container">
            <div className="blank-container"></div>
            <div className="detail-page-container">
                <p>{windowSize.width}, {windowSize.height}</p>
                {children}
            </div>
        </div>
    )
}
