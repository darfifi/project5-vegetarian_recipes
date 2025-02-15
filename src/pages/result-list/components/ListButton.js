import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; // Use of external library react-icons
import '../../../styles/list-button.css'
import { useSelector } from "react-redux";

export default function ListButton({forward, backward, totalPages}) {

    const pageNumber = useSelector(state => state.pageNumber.value)

    return (
        <div className="navigation-button-container">
            <div onClick={backward} className='navigation-button'>
                <IoIosArrowBack style={{width: '20px', height: '20px'}}/>
            </div>
            <div className="pages-counter">Page {pageNumber + 1} of {totalPages}</div>
            <div onClick={forward} className='navigation-button'>
                <IoIosArrowForward style={{width: '20px', height: '20px'}}/>
            </div>
        </div>
    )
}