import React from 'react';
import MainCardData from "./Data/MainCardData";
import MainCardGraph from "./Graph/MainCardGraph";
import NewsContainer from "./News/NewsContainer";

const MainCardContainer = (props) =>{
    const {country, actualData, allData, newsData} = props.data;
    return (
        <div className="main-card-container">
            <h3 className="main-card-title">{country}</h3>
            <div className="main-card-primary"> 
                <MainCardGraph data={allData}/>
                <MainCardData  data={actualData}/>
                <NewsContainer 
                    country={country} 
                    data={props.data.newsData}
                />
            </div>
        </div>
    )
}

export default MainCardContainer
