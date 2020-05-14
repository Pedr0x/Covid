import React from 'react';
//import FrontImage from './FrontImage';
import InfoCard from './InfoCard';

const Front = React.memo((props) =>{
    return(
        <div className="front-container">
            <div className="front-title-container">
                <h2 className="front-title">
                    covid tracker
                </h2>
            </div>
            <div className="info-card-super"> 
                <InfoCard globalCovidData={props.globalCovidData}/>
            </div>
        </div>
    )
})

export default Front;