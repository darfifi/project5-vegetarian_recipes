import React from "react";
import { CiSearch } from "react-icons/ci";
import '../../../styles/search-bar.css'

export default function SearchBar({children}) {
    return (
        <div className="search-bar-container">
            <input className="input-box" type="text" placeholder="Search recipe..." />
            <div className="search-button">{<CiSearch className="search-icon"/>}</div>
            {children}
        </div>
    )
}
