
import React from 'react';
import MainCardDataListContainer from "./MainCardDataListContainer" ;
import MainCardDataListItem from "./MainCardDataListItem" ;

class MainCardData extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            upd: true,
            population: null
        }
    }

    componentDidMount(){
        const country = encodeURI(this.props.country.toLowerCase())
                console.log(this.props.country)
                fetch(`https://restcountries.eu/rest/v2/name/${country}`)
                    .then(res => res.json())
                    .then(res => this.setState({
                        population: res[0].population
                    })
                )
            }
            componentDidUpdate(){
                console.log(this.props.country)

            }
    
        
    render(){
        const {Active: infected} = this.props.data
        const {population} = this.state
        const populationInfected = ` ${((infected / population) * 1000).toFixed(6)}%`
        const pop = ["Infected", populationInfected]
        return(
            <div className="main-card-data">
                <h3 className="main-card-data-title"> Country Data</h3>
                <div className="main-card-data-list-container">
                    <MainCardDataListContainer actualData={this.props.data}/>
                    <MainCardDataListItem data={pop}/>
                </div>
            </div>
        )
    }
}

export default MainCardData