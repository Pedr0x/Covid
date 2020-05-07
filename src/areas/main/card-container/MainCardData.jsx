
import React from 'react';
import MainCardDataListContainer from "./MainCardDataListContainer" 
const MainCardData = (props) => {

    return(
    <div className="main-card-data">
        <h3 className="main-card-data-title"> this is the main data</h3>
        <MainCardDataListContainer actualData={props.data}/>
    </div>
    )
}
export default MainCardData