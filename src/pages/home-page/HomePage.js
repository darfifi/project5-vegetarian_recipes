
import React from "react"
import Title from "../../common-components/Title"
import SearchBar from "./components/SearchBar"
import PopUp from "./components/PopUp"
import About from "./components/About"
import '../../styles/home-page.css'
import Layout from "../../common-components/Layout"

export default function HomePage() {

    

    return (
        <Layout>
            <Title title='Vegetarian Recipes'/>
            <SearchBar >
                {/*<PopUp />*/}
            </SearchBar>
            
            <div className="info-detail-container">
                <About />
            </div>
        </Layout>
    )
}