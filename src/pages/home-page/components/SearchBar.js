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

    // Function called for the onClick event or 'enter' button pressing that starts the search of recipes 

    function startSearch() {
        // Error management
        try {
            if (!searchString.trim()) {
                throw new MissingSearchString('Search string cannot be empty!')     
            }
            if (searchString.trim().length < 2) {
                throw new MissingSearchString('Search string should have at least two characters!')
            }
            const stringForUrl = encodeURIComponent(searchString)
            dispatch(setLoading()) // Change of the modalStatus slice in order to make the loading message to be visualized
            getRecipesList(stringForUrl)
                .then(data => {
                    if (data.length === 0) {
                        throw new MissingResult('You shoud try with another search string!')
                    } 
                    dispatch(setList(data)) // Loading of data from the API call  in the array defined by the recipesList slice
                    dispatch(resetModalStatus()) // Reset of the modalStatus to the default value (no modal window visible)
                    navigate('/searchresult/recipes') // Opening of the page with the recipes list visualization      
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
