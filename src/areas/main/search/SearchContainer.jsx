import React from 'react';
import SearchMainInput from './SearchMainInput';

const SearchContainer = (props) =>{
    return(
    <div className="search-container">
        <SearchMainInput searchCallback={props.searchCallback}/>
    </div>
    )
}

export default SearchContainer