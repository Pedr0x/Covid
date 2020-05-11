import React from 'react';
import MainCardDataListItem from "./MainCardDataListItem"
const _ = require('lodash');

const MainCardDataListContainer = (props) => {
    const data = Object.entries(props.actualData) || [];
        return(
            <React.Fragment>
                {props.actualData 
                        ? data.map(elem =>
                                <MainCardDataListItem key={_.uniqueId() }data={elem}/>
                            )
                        : null  
                    }
            </React.Fragment>            
        )
}

export default MainCardDataListContainer