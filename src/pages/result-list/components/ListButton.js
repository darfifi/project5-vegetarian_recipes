import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; // Use of external library react-icons
import '../../../styles/list-button.css'

export default function ListButton({forward, backward}) {
    return (
        <div className="navigation-button-container">
            <div onClick={backward} className='navigation-button'>
                <IoIosArrowBack style={{width: '20px', height: '20px'}}/>
            </div>

            <div className="pages-counter">Page 1 of 3</div>

            <div onClick={forward} className='navigation-button'>
                <IoIosArrowForward style={{width: '20px', height: '20px'}}/>
            </div>
        </div>
    )
}