
import React from "react"
import Title from "../../common-components/Title"
import SearchBar from "./components/SearchBar"
import PopUp from "./components/PopUp"
import About from "./components/About"
import '../../styles/home-page.css'

export default function HomePage() {
    return (
        <>
            <div className="bimbo">
                <Title title='Vegetarian Recipe'/>
                <div>
                    <SearchBar>
                        {/*<PopUp />*/}
                    </SearchBar>
                </div> 
            </div>
            <div className="info-detail-container">
                <About />
            </div>
        </>
    )
}