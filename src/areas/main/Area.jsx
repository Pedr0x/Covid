import React from 'react';
import SearchContainer from "./search/SearchContainer";
import CardsContainer from "./card-container/CardsContainer";

class Area extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            upd: true,
            error:false
        };
        this.data = {
            country: "South Africa",
            actualData: {
                deaths: null,
                recovered:null,
                active: null,
                infectedPopulation:null
            },
            allData: [],
            countryPopulation: null,
            newsData : []
        }

        this.formatChartData = this.formatChartData.bind(this);
        this.getData = this.getData.bind(this);
        this.searchCountry = this.searchCountry.bind(this);      
        this.getApisData = this.getApisData.bind(this);        
        
      }
      componentDidMount(){
        this.getData();
      }

      componentDidUpdate(){
          console.count("upd")
      }

      formatChartData(value){
          // FIX THIS ASAP
          const newArray = value
            .map(({City, CityCode, Country, CountryCode, Lat, Lon, Province , ...item}) => item);
            return(newArray);
    }

        getData(){
        const API_LINK = `https://api.covid19api.com/dayone/country/${this.data.country}`;
        //const response = await fetch(API_LINK).json();
        const getCovidData = async () => {
            const response = await fetch(API_LINK).then(res => res.json());
            const {
                Deaths,
                Recovered, 
                Active,
                Country
            } = response[response.length - 1];

                const newActualData = {
                    Deaths,
                    Recovered, 
                    Active
                };
                const allData = this.formatChartData(response);
                this.data = {
                    actualData: newActualData,
                    country: Country,
                    allData
                };
                this.getApisData()
                    }
                    getCovidData()
                        .then(res => console.log("updd"))
    }

        getApisData(){
            //main card
            const {Active} = this.data.actualData;
            const  getAsyncApiData = async () =>{
            const country = encodeURI(this.data.country.toLowerCase());
            //let {infectedPopulation, Active} = this.data.actualData;
            const newsEndpoint = 'http://newsapi.org/v2/everything?' +
            `q=coronavirus+${country}&`+
            'sortBy=popularity&' +
            'apiKey=e90151a117284afab2e332a31e55bd7a';

            const getCardData = async () => {
                const infectedPopulationRequest = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
                .then(res => res.json() )
                .then(res =>  ((Active  / res[0].population)* 100000).toFixed(2));
                return(infectedPopulationRequest)
            }

             const getNewsData = async () => {
                const countryNews = await fetch(newsEndpoint)
                    .then(res => res.json())
                    .then(res =>res.articles);
                return(countryNews)
            }
            const [infectedPopulation, newsData] = await Promise.all([getCardData(), getNewsData()])
            this.data.actualData.infectedPopulation = infectedPopulation;
            this.data.newsData = newsData;
            this.setState({
                upd:1
            });
        }
        getAsyncApiData();
}
    searchCountry(data){
        this.data.country = data;
        this.getData();
    }

    render(){
        return(
            <div className="Area">
                <SearchContainer 
                    searchCallback={this.searchCountry}
                />
                <CardsContainer data={this.data}/>
            </div>
            )
    }
}

export default Area

