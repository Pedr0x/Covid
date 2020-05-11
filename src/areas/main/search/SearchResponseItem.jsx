import React from 'react';

const SearchResItem = (props) => {
    return(
       <div 
        className="search-res-item" 
        onClick={() => props.callback(props.item.Country)}
        >
            {`${props.item.Country}`}
       </div>
    )
};

export default SearchResItem