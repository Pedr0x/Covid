import React from 'react';


const InfoBannerCard = (props) => {
    return(
        <div className="info-banner-card">
            <div> 
                <h3 className="info-banner-card-title">
                    {props.title}
                </h3>
            </div>
            <h2 className="info-banner-card-data">
                {props.data}
            </h2>
        </div>
    )
}
export default InfoBannerCard