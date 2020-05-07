import React from 'react';
import MainCardDataListItem from "./MainCardDataListItem"

const MainCardDataListContainer = (props) => {
    const data = Object.entries(props.actualData) || [];
    return(
        <div className="main-card-data-list-container">
        <ul className="main-card-data-list">
            {props.actualData 
                ? data.map(elem =>
                        <li>
                        <MainCardDataListItem data={elem}/>
                    </li>
                    )
                  : null  
            }
        </ul>
    </div>
    )
}

export default MainCardDataListContainer