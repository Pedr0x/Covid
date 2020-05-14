import React from 'react';
import MainCardDataListContainer from "./MainCardDataListContainer" ;

const MainCardData = (props) =>{
    return(
        <div className="main-card-data">
            <h3 className="main-card-data-title"> Country Data</h3>
            <div className="main-card-data-list-container">
                <MainCardDataListContainer actualData={props.data}/>
            </div>
        </div>
    )
};

export default MainCardData