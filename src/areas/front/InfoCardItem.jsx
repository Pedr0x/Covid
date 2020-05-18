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
            <div className="info-card-data-container"> 
                <h5 className="info-card-item-number">
                    {props.number && formatNumber(props.number)}
            </h5>
            <h6 className="info-card-new">
                {props.newData && formatNumber(props.newData)}  New
            </h6>
            </div>
        </div>

    )
}

export default InfoCardItem;