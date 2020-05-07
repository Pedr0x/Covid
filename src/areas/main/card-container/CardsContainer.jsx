import React from 'react';
import moment from 'moment';

import MainCardContainer from './MainCardContainer';

class CardsContainer extends React.Component{
    constructor(props) {
        super(props);
        // No llames this.setState() aquí!
        this.state = { 
            upd: true
        };

        this.data = {
            country: "",
            actualData: {
                deaths: null,
                recovered:null,
                active: null
            },
            allData: []
        }
        this.formatChartData = this.formatChartData.bind(this);
      }
      componentDidMount(){
        const API_LINK = "https://api.covid19api.com/dayone/country/south-africa";

          fetch(API_LINK)
            .then(res => res.json())
            .then(res => {
                const {
                    Deaths,
                    Recovered, 
                    Active,
                    Country
                } = res[res.length  - 1];

                const newActualData = {
                    Deaths,
                    Recovered, 
                    Active
                };

                const allData = this.formatChartData(res);
                this.data = {
                    actualData: newActualData,
                    country: Country,
                    allData
                }

                this.setState({
                    upd: 1
                })
                console.log(this.state)
            })
      }
      formatChartData(data){
          // FIX THIS ASAP
    
          const newArray = data
            .map(({City, CityCode, Country, CountryCode, Lat, Lon, Province , ...item}) => item)
            .map(elem => moment(elem.Date).format("L"))
            console.log(newArray);
            return(newArray);
    }
    render(){
        return(
            <div className="cards-container">
                <MainCardContainer data={this.data}/>
            </div>
            )
    }  
}

export default CardsContainer;