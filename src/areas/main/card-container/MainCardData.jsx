
import React from 'react';
import MainCardDataListContainer from "./MainCardDataListContainer" ;

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
                    }))
                    
            }

            componentDidUpdate(){
                console.log(this.props.country)

            }
    
    render(){
        return(
            <div className="main-card-data">
                <h3 className="main-card-data-title"> Country Data</h3>
                <MainCardDataListContainer actualData={this.props.data}/>
                <div>
                {this.state.population}
                cases per million :
                {this.state.population / this.props.data.Active}
                </div>
            </div>
        )
    }
}

export default MainCardData