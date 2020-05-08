import React from 'react';

import MainCardContainer from './MainCardContainer';

class CardsContainer extends React.Component{
    render(){
        return(
            <div className="cards-container">
                <MainCardContainer data={this.props.data}/>
            </div>
            )
    }  
}

export default CardsContainer;