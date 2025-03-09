import React from "react"
import Title from "../../common-components/Title"
import SearchBar from "./components/SearchBar"
import PopUp from "./components/PopUp"
import About from "./components/About"
import '../../styles/modal.css'
import Layout from "../../common-components/Layout"
import Modal from "../../common-components/Modal"
import Message from "../../common-components/Message"
import { useSelector, useDispatch } from "react-redux"
import { resetModalStatus } from "../../store/slices/modalStatus"

export default function HomePage() {

    const modalStatus = useSelector(state => state.modalStatus.value);
    const dispatch = useDispatch();

    const refreshPage = function() {
        dispatch(resetModalStatus())
    }

    return (
        <Layout>
            {(modalStatus.error.status || modalStatus.loading) && <Modal> 
                <div className="error-message-container"> 
                    {modalStatus.loading && <Message message={'Loading...'}/>}
                    {modalStatus.error.status && <Message message={`${modalStatus.error.name}`} subMessage={`${modalStatus.error.message}`}/>}
                    {modalStatus.error.status && <div className="error-back-button" onClick={refreshPage}>Close</div>}
                </div>
            </Modal>}
            <Title 
                title='Vegetarian Recipes'
                details={false}
            />
            <SearchBar >
                {/*<PopUp />*/}
            </SearchBar>
            <About />   
        </Layout>
    )
}