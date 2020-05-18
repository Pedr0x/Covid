import React from 'react';
import InfoCard from './InfoCard';
//import InfoBanner from './InfoBanner';

const Front = React.memo((props) =>{

    return(
        <React.Fragment>
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
        </React.Fragment>
    )
})

export default Front;