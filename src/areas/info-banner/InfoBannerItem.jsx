import React from 'react';

const InfoBannerItem = (props) =>{
    return(
        <div className="info-banner-item-container">
           <h5 className="info-banner-item-label">
               {props.label}:
           </h5>
            <h5 className="info-banner-item-number">
            {props.number}
           </h5>
        </div>
    )
}

export default InfoBannerItem;