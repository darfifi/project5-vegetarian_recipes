import React from "react";
import '../styles/layout.css'
import { useState, useEffect } from "react"

export default function Layout({children}) {

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

        // Cleanup of the listener when the component is dismounted
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <div style={{width: `${windowSize.width}px`, height: `${windowSize.height}px`}} className="general-container">
            <div className="blank-container"></div>
            <div className="visualization-container">
                {children}
            </div>
        </div>
    )
}
