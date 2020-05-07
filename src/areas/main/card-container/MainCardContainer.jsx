import React from 'react';

const MainCardContainer = (props) =>{
    const {country, actualData, allData} = props.data;
    
    return(
    <div className="main-card-container">
        <h3 className="main-card-title">{country}</h3>
        <div className="main-card-primary"> 
        <div className="main-card-graph-container">
        <h3>
            this is a graph
        </h3>
        </div>

        <div className="main-card-data">
            <h3 className="main-card-data-title"> this is the main data</h3>
            <div className="main-card-data-list-container">
                <ul className="main-card-data-list">
                    <li> data</li>
                    <li> data</li>
                    <li> data</li>
                    <li> data</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
    )
}

export default MainCardContainer
