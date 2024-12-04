import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import '../../../styles/search-bar.css'
import { useAxios } from "../../../customized-hooks/useAxios";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { setList } from "../home-page-slices/recipesList";


export default function SearchBar({children, startSearch}) {

    const [searchString, setSearchString] = useState('')

    const { getRecipesList } = useAxios()

    let recipesList = useSelector(state => state.recipesList.value)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    function updateSearchString(event) {
        setSearchString(event.target.value)
    }

    function startSearch() {
        const stringForUrl = encodeURIComponent(searchString)
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=bb20efb7b3a3496ba813cf00c622777a&query=${stringForUrl}`
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
