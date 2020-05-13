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
                infected:null
            },
            allData: [],
            countryPopulation: null,
            newsData : [],
        }
        this.allCountries =[]

        this.formatChartData = this.formatChartData.bind(this);
        this.searchCountry = this.searchCountry.bind(this);      
        this.getApisData = this.getApisData.bind(this);     
        this.getCountries = this.getCountries.bind(this);  
        this.resetCountry = this.resetCountry.bind(this);  
        
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
        }

      formatChartData(value){
          const newArray = value
            .map(({City, CityCode, Country, CountryCode, Lat, Lon, Province , ...item}) => item);
            return(newArray);
    }

    getDataNew(){
        const API_LINK = `https://api.covid19api.com/dayone/country/${this.data.country}`;
        const getCovidData =  () => {
            return new Promise((resolve, reject ) => {
                const req = new XMLHttpRequest();
                req.responseType = "json";
                req.open('GET', API_LINK, true);
                req.send();
                req.onreadystatechange = () => {
                    if (req.readyState === 4) {
                        if (req.status === 200) {
                            resolve(req.response);
                        } else {
                            reject({
                                code:req.status,
                                area:"country Covid"
                            })
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
                error: err
            }));
    }

        getApisData(){
            const {Active} = this.data.actualData;
            const  getAsyncApiData =  () =>{
            const country = encodeURI(this.data.country.toLowerCase());
            const newsEndpoint = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?' +
            `q=coronavirus+${country}&`+
            'sortBy=popularity&' +
            'apiKey=e90151a117284afab2e332a31e55bd7a';

            const getCardData =  () => {
                return new Promise((resolve, reject ) => {
                    const req = new XMLHttpRequest();
                    req.responseType = "json";
                    req.open("GET", `https://restcountries.eu/rest/v2/name/${country}`, true );
                    req.send();
                    req.onreadystatechange = () => {
                        if (req.readyState === 4) {
                            if (req.status === 200) {
                                const infected = ((Active  / req.response[0].population)* 100000).toFixed(2);
                                resolve(infected);
                            } else {
                                reject({
                                    code:req.status,
                                    area:"countryPopulation"
                                });
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
                                reject({
                                    code:req.status,
                                    area:"news"
                                });
                            }
                        }
                    }
                })
        }
            
            return Promise.all([getCardData(), getNewsData()])
                .then(values => { 
                    const [infected, newsData] = values;
                    this.data.actualData.infected = infected;
                    this.data.newsData = newsData;
                    return values
                })
                .catch(reason => {
                    console.log(reason);
                })
        }

        getAsyncApiData()
            .catch(err => this.setState({
                error: err
            }))
            .then(res => this.setState({
                upd:1,
                error:false
            }))
        }
    
    searchCountry(data){
        this.data.country = data;
        this.getDataNew();
    }

    resetCountry(){
        this.data.country = "Argentina";
        this.getDataNew();
    }
      
    render(){
        return(
            <div className="Area">
               <ErrorModal 
                    hasError={this.state.error} 
                    searchCallback={this.getDataNew}
                    resetCountry={this.resetCountry}
                />
                <SearchContainer
                    countries={this.allCountries} 
                    searchCallback={this.searchCountry}
                />
                <CardsContainer data={this.data}/>
            </div>
            )
    }
};

export default Area

