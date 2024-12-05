import React, { useState } from "react";
import '../../../styles/search-bar.css' // Styling file .css import
import { CiSearch } from "react-icons/ci"; 
import { useAxios } from "../../../customized-hooks/useAxios"; // Import of customized hook for fetching operations
import { setList } from "../home-page-slices/recipesList"; // Import of reducer from slice recipesList
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_KEY } from "../../../config"

export default function SearchBar({children, startSearch}) {

    const [searchString, setSearchString] = useState('') 
    const { getRecipesList } = useAxios()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Function to update search string during digitation 

    function updateSearchString(event) {
        setSearchString(event.target.value)
    }

    // Function called for the onClick event that start the search of recipes

    function startSearch() {
        const stringForUrl = encodeURIComponent(searchString)
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${stringForUrl}&number=100`
        getRecipesList(url)
            .then(data => dispatch(setList(data)))
            .then(navigate('/searchresult/recipes'));        
}

    return (
        <div className="search-bar-container">
            <input onChange={updateSearchString} className="input-box" type="text" placeholder="Search recipe..." />
            <div onClick={startSearch} className="search-button">{<CiSearch className="search-icon"/>}</div>
            {children}
        </div>
    )
}
