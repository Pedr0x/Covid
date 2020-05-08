import React from 'react';
import MainCardData from "./MainCardData";
import MainCardGraph from "./MainCardGraph";
import NewsContainer from "./NewsContainer";

const MainCardContainer = (props) =>{
    const {country, actualData, allData} = props.data;
    
    return(
    <div className="main-card-container">
        <h3 className="main-card-title">{country}</h3>
        <div className="main-card-primary"> 
        <div className="main-card-graph-container">
            <MainCardGraph data={allData}/>
        </div>
       <MainCardData data={actualData}/>
        <NewsContainer country={country}/>
        </div>
    </div>
    )
}

export default MainCardContainer
