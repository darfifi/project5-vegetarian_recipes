import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; // Use of external library react-icons
import '../../../styles/list-button.css'

export default function ListButton({forward, backward}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid red'}}>
            <div onClick={backward} className='navigation-button'>
                <IoIosArrowBack style={{width: '20px', height: '20px'}}/>
            </div>

            <div>Page 1 of 3</div>

            <div onClick={forward} className='navigation-button'>
                <IoIosArrowForward style={{width: '20px', height: '20px'}}/>
            </div>
        </div>
    )
}