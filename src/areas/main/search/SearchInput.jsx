import React from 'react';

const SearchInput = (props) => {
    return(
        <React.Fragment> 
            <h4 className="search-input-label">
                Search any country
            </h4>  
            <input  
                placeholder="China" 
                className="search-main-input" 
                type="text"
                onChange={props.getInputdata}
            />
    </React.Fragment>
    )
};

export default SearchInput