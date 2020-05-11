
import React from 'react';
import SearchResItem from "./SearchResponseItem";
const _ = require('lodash');

const SearchResContainer = (props) => {
    if (props.data){
    return(
        <div 
            className={`search-res-container-super ${props.activeContainer}`} 
        >
            {props.data.map(elem => 
                <SearchResItem
                    key={_.uniqueId()}
                    callback={props.callback} 
                />
            )
        }
        </div>
    )
    } else {
        return null
    }
}

export default SearchResContainer