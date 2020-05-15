import React from 'react';

const InfoCardItem = (props) =>{
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
    return(
        <div className="info-card-item-container">
            <h5 className="info-card-item-label">
               {props.label}:
            </h5>
            <h5 className="info-card-item-number">
                {props.number && formatNumber(props.number)}
           </h5>
        </div>
    )
}

export default InfoCardItem;