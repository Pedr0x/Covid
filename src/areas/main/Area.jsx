import React from 'react';
import SearchContainer from "./search/SearchContainer";
import CardsContainer from "./card-container/CardsContainer";

class Area extends React.Component{

    componentDidMount(){
       console.log(2)
    }
    
    render(){
        return(
            <div className="Area">
                <SearchContainer/>
                <CardsContainer/>
            </div>
            )
    }
}

export default Area

