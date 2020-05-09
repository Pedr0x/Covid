import React from 'react';
import MainCardData from "./Data/MainCardData";
import MainCardGraph from "./MainCardGraph";
import NewsContainer from "./News/NewsContainer";

const MainCardContainer = (props) =>{
    const {country, actualData, allData} = props.data;
    
    return(
    <div className="main-card-container">
        <h3 className="main-card-title">{country}</h3>
        <div className="main-card-primary"> 
        <MainCardGraph data={allData}/>
       <MainCardData  country={country} data={actualData}/>
        <NewsContainer country={country}/>
        </div>
    </div>
    )
}

export default MainCardContainer
