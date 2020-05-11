import React from 'react';

const InfoCardItem = (props) =>{
    return(
        <div className="info-card-item-container">
            <h5 className="info-card-item-label">
               {props.label}:
            </h5>
            <h5 className="info-card-item-number">
                {props.number}
           </h5>
        </div>
    )
}

export default InfoCardItem;