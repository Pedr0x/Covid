import React from 'react';

const SearchInput = (props) => {
    return(
        <div className="search-main-input-container"> 
                <h4 className="search-input-label">
                    Search any country
                </h4>  
             <input  
                placeholder="China" 
                className="search-main-input" 
                type="text"
                onChange={props.getInputdata}
            />
    </div>
    )
};

export default SearchInput