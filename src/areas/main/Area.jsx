import React from 'react';
import SearchContainer from "./search/SearchContainer";
import CardsContainer from "./card-container/CardsContainer";
import ErrorModal from "./ErrorModal";

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
            newsData : [],
        }
        this.allCountries =[]

        this.formatChartData = this.formatChartData.bind(this);
        this.getData = this.getData.bind(this);
        this.searchCountry = this.searchCountry.bind(this);      
        this.getApisData = this.getApisData.bind(this);     
        this.getCountries = this.getCountries.bind(this);  

    }
      componentDidMount(){
        this.getDataNew();
        this.getCountries()
           
      }
        getCountries(){
             const COUNTRIES_ENDPOINT = "https://api.covid19api.com/countries"
            const getRequest =   () => {
                return new Promise((resolve, reject ) => {
                    const req = new XMLHttpRequest();
                    req.responseType = "json";
                    req.open("GET", COUNTRIES_ENDPOINT, true );
                    req.send();
                    req.onreadystatechange = () => {
                        if (req.readyState === 4) {
                            if (req.status === 200) {
                                resolve(req.response);
                            } else {
                                console.log("bad request");
                                reject(req.status);
                            }
                        }
                    }
                })
            } 
            getRequest()
                .then(res => this.allCountries = res)
                .catch(err => err)
            console.log(this.data);
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

    getDataNew(){
        const API_LINK = `https://api.covid19api.com/dayone/country/${this.data.country}`;
        const getCovidData =  () => {
            return new Promise((resolve, reject ) => {
                let req = new XMLHttpRequest();
                req.responseType = "json";
                req.open('GET', API_LINK, true);
                req.send();
                req.onreadystatechange = () => {
                    if (req.readyState === 4) {
                        if (req.status === 200) {
                            resolve(req.response);
                        } else {
                            reject(req.status)
                        }
                    }
                }
            })
    }
        getCovidData()
                .then(res => {
                const {
                    Deaths,
                    Recovered, 
                    Active,
                    Country
                } = res[res.length - 1];
            
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
                };
            })
            .then(res =>  this.getApisData())
            .catch(err => this.setState({
                error: true
            }))
}

        getApisData(){
            //main card
            const {Active} = this.data.actualData;
            const  getAsyncApiData =  () =>{
            const country = encodeURI(this.data.country.toLowerCase());
            //let {infectedPopulation, Active} = this.data.actualData;
            const newsEndpoint = 'http://newsapi.org/v2/everything?' +
            `q=coronavirus+${country}&`+
            'sortBy=popularity&' +
            'apiKey=e90151a117284afab2e332a31e55bd7a';

            const getCardData =  () => {
                return new Promise((resolve, reject ) => {
                    let req = new XMLHttpRequest();
                    req.responseType = "json";
                    req.open("GET", `https://restcountries.eu/rest/v2/name/${country}`, true );
                    req.send();
                    req.onreadystatechange = () => {
                        if (req.readyState === 4) {
                            if (req.status === 200) {
                                const infectedPopulation = ((Active  / req.response[0].population)* 100000).toFixed(2);
                                resolve(infectedPopulation);
                            } else {
                                reject(req.status);
                            }
                        }
                    }
                })
            }

             const getNewsData =  () => {
                return new Promise((resolve, reject ) => {
                    const req = new XMLHttpRequest();
                    req.responseType = "json";
                    req.open("GET", newsEndpoint, true );
                    req.send();
                    req.onreadystatechange = () => {
                        if (req.readyState === 4) {
                            if (req.status === 200) {
                                resolve(req.response.articles);
                            } else {
                                console.log("bad request");
                                reject(req.status);
                            }
                        }
                    }
                })
        }
            
            return Promise.all([getCardData(), getNewsData()])
                .then(values => { 
                    const [infectedPopulation, newsData] = values;
                    this.data.actualData.infectedPopulation = infectedPopulation;
                    this.data.newsData = newsData;
                    return values
                })
                .catch(reason => {
                    console.log(reason, "1");
                    this.setState({
                        error:true,
                    })
                })
        }

        getAsyncApiData()
            .catch(err => this.setState({
                error: true
            }))
            .then(res => this.setState({
                upd:1
            }))
        }
    
    searchCountry(data){
        this.data.country = data;
        this.getDataNew();
    }
      
    render(){
        return(
            <div className="Area">
               <ErrorModal hasError={this.state.error} searchCallback={this.getDataNew}/>
                <SearchContainer
                    countries={this.allCountries} 
                    searchCallback={this.searchCountry}
                />
                <CardsContainer data={this.data}/>
            </div>
            )
    }
}

export default Area

