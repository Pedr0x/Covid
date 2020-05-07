import React from 'react';

const MainCardDataListItem = (props) => {
    return(
        <div> 
        <h6 className="main-card-list-item-label">
            {props.data[0]}
        </h6>
        <h6 className="main-card-list-item-data">
            {props.data[1]}
        </h6>
        </div>
    )
}

export default MainCardDataListItem