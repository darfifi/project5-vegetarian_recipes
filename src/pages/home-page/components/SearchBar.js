import React, { useState } from "react";
import '../../../styles/search-bar.css'
import { CiSearch } from "react-icons/ci"; 
import { useAxios } from "../../../customized-hooks/useAxios";
import { setList } from "../../../store/slices/recipesList"; 
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MissingSearchString, MissingResult } from "../../../utils/errors";
import { resetModalStatus, setError, setLoading } from "../../../store/slices/modalStatus";


export default function SearchBar({children}) {

    const [searchString, setSearchString] = useState('') 
    const { getRecipesList } = useAxios()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Function to update search string during digitation 

    function updateSearchString(event) {
        setSearchString(event.target.value)
    }

    // Function called for the onClick event that starts the search of recipes

    function startSearch() {
        try {
            if (!searchString.trim()) {
                throw new MissingSearchString('Search string cannot be empty!')     
            }
            if (searchString.trim().length < 2) {
                throw new MissingSearchString('Search string should have at least two characters!')
            }
            const stringForUrl = encodeURIComponent(searchString)
            dispatch(setLoading())
            getRecipesList(stringForUrl)
                .then(data => {
                    if (data.length === 0) {
                        throw new MissingResult('You shoud try with another search string!')
                    } 
                    dispatch(setList(data))
                    dispatch(resetModalStatus())
                    navigate('/searchresult/recipes')       
                })
                .catch(error => dispatch(setError(error)))
        } catch (error) {
            dispatch(setError(error))
        }  
    }
    return (
        <div className="search-bar-container">
            <input 
                onChange={updateSearchString} 
                onMouseEnter={event => event.target.style.backgroundColor = 'rgb(183, 183, 183)'} 
                onMouseOut={event => event.target.style.backgroundColor = 'white'}
                onKeyDown={event => {if (event.key === 'Enter') {
                    startSearch();                    
                }}}
                className="input-box" type="text" 
                placeholder="Search recipe..." 
            />
            <CiSearch className="search-icon" onClick={startSearch}/>
            {children}
        </div>
    )
}
