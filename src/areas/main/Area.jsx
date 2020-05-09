import React from 'react';
import SearchContainer from "./search/SearchContainer";
import CardsContainer from "./card-container/CardsContainer";
import moment from 'moment';


class Area extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            upd: true
        };

        this.data = {
            country: "South Africa",
            actualData: {
                deaths: null,
                recovered:null,
                active: null
            },
            allData: []
        }
        this.formatChartData = this.formatChartData.bind(this);
        this.getData = this.getData.bind(this);
        this.searchCountry = this.searchCountry.bind(this);        
        
      }
      componentDidMount(){
        this.getData()
      }
      formatChartData(value){
          // FIX THIS ASAP
          const newArray = value
            .map(({City, CityCode, Country, CountryCode, Lat, Lon, Province , ...item}) => item)
            const nArray= Array.from(newArray)
                .forEach(elem => elem.Date = moment(elem.Date).format("L"))
            return(newArray);
    }

    getData(){
        const API_LINK = `https://api.covid19api.com/dayone/country/${this.data.country}`

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
            })
    }

    searchCountry(data){
        this.data.country = data;
        this.getData();
        this.setState({
            upd:true
        })
    }

    render(){
        return(
            <div className="Area">
                <SearchContainer searchCallback={this.searchCountry}/>
                <CardsContainer data={this.data}/>
            </div>
            )
    }
}

export default Area

