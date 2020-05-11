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
                        .then(x => console.log("worked2"))
                        .then(this.setState({
                            upd:1
                        }));
    }

        getApisData(){
            //main card
            const {Active} = this.data.actualData;
            const  getAsyncApiData = async () =>{
            const country = encodeURI(this.data.country.toLowerCase());
            //let {infectedPopulation, Active} = this.data.actualData;
            const newsEndpoint = 'http://newsapi.org/v2/everything?' +
            `q=coronavirus+${country}&`+
            'from=2020-05-08&' +
            'sortBy=popularity&' +
            'apiKey=d9dec0e748f54b529c66312f71823af3';

            const getCardData = async () => {
                const infectedPopulationRequest = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
                .then(res => res.json() )
                .then(res =>  Active / (res[0].population * 1000).toFixed(6));
                return(infectedPopulationRequest)
                //this.data.infectedPopulation = infectedPopulation;
            }

             const getNewsData = async () => {
                const countryNews = await fetch(newsEndpoint).then(res => res.json()).then(res =>res.articles);
                return(countryNews)
                //this.data.newsData = countryNews;
            }

            await Promise.all([getCardData(), getNewsData()]);
            const [infectedPopulation, newsData] = await Promise.all([getCardData(), getNewsData()]);

            this.data.actualData = {
                infectedPopulation,
            }
            this.data.newsData = newsData;
            console.log(this.data);
        }
        getAsyncApiData();
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
                    <button onClick={() => this.setState({
                        upd:1
                    })}>
                        state
                </button>
            </div>
            )
    }
}

export default Area

