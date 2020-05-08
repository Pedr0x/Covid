import React from 'react';
import SearchMainInput from './SearchMainInput';

const SearchContainer = (props) =>{
    return(
    <div className="search-container">
        <SearchMainInput searhCalback={props.searchCalback}/>
    </div>
    )
}

export default SearchContainer