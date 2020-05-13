import React from 'react';

const SearchResItem = (props) => {
    return(
       <div 
            className="search-res-item" 
            onClick={() => props.callback(props.country)}
        >
            {`${props.country}`}
       </div>
    )
};

export default SearchResItem