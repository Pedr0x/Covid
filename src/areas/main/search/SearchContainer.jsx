import React from 'react';
import SearchMainInput from './SearchMainInput';

const SearchContainer = (props) =>{
    return(
    <div className="search-container">
        <SearchMainInput 
            countries={props.countries} 
            searchCallback={props.searchCallback}
        />
    </div>
    )
}

export default SearchContainer