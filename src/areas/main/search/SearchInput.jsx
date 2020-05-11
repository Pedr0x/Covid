import React from 'react';

const SearchInput = (props) => {
    return(
        <div className="search-main-input-container">           
             <input  
                placeholder="Search country" 
                className="search-main-input" 
                type="text"
                onChange={props.getInputdata}
            />
    </div>
    )
};

export default SearchInput