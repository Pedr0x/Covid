import React from 'react';
import MainCardData from "./MainCardData";
import MainCardGraph from "./MainCardGraph";

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
       <MainCardData data={actualData}/>
        </div>
    </div>
    )
}

export default MainCardContainer
