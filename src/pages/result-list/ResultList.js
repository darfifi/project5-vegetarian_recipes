import React from "react";
import Title from "../../common-components/Title";
import ResultItem from '../result-list/components/ResultItem'
import MultipurposeButton from "../../common-components/MultipurposeButton";
import { useNavigation } from "../../customized-hooks/useNavigation";
import Layout from "../../common-components/Layout";
import Modal from "../../common-components/Modal"
import Message from "../../common-components/Message"
import { useSelector, useDispatch } from "react-redux"
import { resetModalStatus } from "../../store/slices/modalStatus"

export default function ResultList() {
    
    const { backToSearch } = useNavigation();
    const modalStatus = useSelector(state => state.modalStatus.value);
    const dispatch = useDispatch()

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
            <MultipurposeButton 
                title={'New search'}
                buttonFunction={backToSearch}
            />
            <ResultItem />
        </Layout>
    )
}