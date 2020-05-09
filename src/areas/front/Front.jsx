import React from 'react';
//import FrontImage from './FrontImage';
import InfoCard from './InfoCard';


const Front = () =>{
    return(
        <div className="front-container">
            <div className="front-title-container">
                <h2 className="front-title">
                    covid 19 global
                </h2>
            </div>
            <div className="info-card-super"> 
                <InfoCard/>
            </div>
        </div>
    )
}

export default Front;