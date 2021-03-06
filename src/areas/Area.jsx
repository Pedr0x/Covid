import React from 'react';
import SearchContainer from "./main/search/SearchContainer";
import CardsContainer from "./main/card-container/CardsContainer";
import ErrorModal from "./main/ErrorModal";
import Front from "./front/Front";

class Area extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            error:false,
            loading:false
        };
        this.data = {
            country: "South Africa",
            actualData: {
                deaths: null,
                recovered:null,
                Active: null,
                infected:null
            },
            allData: [],
            newsData : [],
        }
        this.globalCovidData = [];
        this.formatChartData = this.formatChartData.bind(this);
        this.searchCountry = this.searchCountry.bind(this);      
        this.getApisData = this.getApisData.bind(this);     
        this.resetCountry = this.resetCountry.bind(this);  
        this.getGlobalCovidData = this.getGlobalCovidData.bind(this);  
        this.getDataNew = this.getDataNew.bind(this);  
        this.resolveCountryData = this.resolveCountryData.bind(this);  
    }

      componentDidMount(){
          this.setState({
              loading:true
          });
        this.getGlobalCovidData()
            .then(res =>  this.globalCovidData = res)
           .then(res => this.resolveCountryData())
            .catch(reason => {
                this.setState({error: reason});
            })
            .finally(res => console.log("promise ended"))
      }
 
    componentDidUpdate(){
        
    }
    resolveCountryData(){
        this.getDataNew()
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
                    Active,
                    infected: null
                };
                const allData = this.formatChartData(res);
                //deestructure data 
                const {
                        actualData: oldActualData, 
                        country:oldCountry, 
                        allData: oldAllData,
                        ...oldItems
                    } = this.data;

                this.data = {
                    actualData: newActualData,
                    country: Country,
                    allData,
                    ...oldItems
                };
            })
            .then(res => this.getApisData())
            .then(values => { 
                const [infected, newsData] = values;
                this.data.actualData.infected = infected;
                this.data.newsData = newsData;
            })
            .then(this.setState({
                error:false,
            }))
            .catch(error => this.setState({
                error
            })) 
            .catch(error => console.log(error))
            .finally(res => this.setState({
                loading:false
            }))
    }
    
        getGlobalCovidData(){
            const ENDPOINT = "https://cors-anywhere.herokuapp.com/https://api.covid19api.com/summary";
            return new Promise((resolve, reject ) => {
                const req = new XMLHttpRequest();
                req.responseType = "json";
                req.open("GET", ENDPOINT, true );
                req.send();
                req.onreadystatechange = () => {
                    if (req.readyState === 4) {
                        if (req.status === 200) {
                            resolve(req.response.Global)
                        } else {
                            reject({
                                code:req.status,
                                area:"globalCovid"
                            });
                        }
                    }
                }
            })
        }

      formatChartData(value){
          const newArray = value
             .map(({City, CityCode, Country, CountryCode, Lat, Lon, Province , ...item}) => item);
        return(newArray);
    }

    getDataNew(){
        const API_LINK = `https://api.covid19api.com/dayone/country/${this.data.country}`;
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

        getApisData(){
            const country = encodeURI(this.data.country.toLowerCase());
            const newsEndpoint = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?' +
            `q=coronavirus+${country}&`+
            'sortBy=popularity&' +
            'apiKey=df0093d65eb24bf5afb433ac542e4666';

            const getCardData =  () => {
                return new Promise((resolve, reject ) => {
                    const req = new XMLHttpRequest();
                    req.responseType = "json";
                    req.open("GET", `https://restcountries.eu/rest/v2/name/${country}`, true );
                    req.send();
                    req.onreadystatechange = () => {
                        if (req.readyState === 4) {
                            if (req.status === 200) {
                                const infected = ((this.data.actualData.Active  / req.response[0].population)* 100000).toFixed(2);
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
            }        
    
    searchCountry(data){
        this.data.country = data 
        this.setState({loading:true});
        this.resolveCountryData();
    }

    resetCountry(){
        //reset on bad request
        this.data.country = "Argentina";
        this.setState({loading:true});
        this.resolveCountryData();        
    }
    
    render(){
        return(
            <div className="Area">
               <ErrorModal 
                    hasError={this.state.error} 
                    resetCountry={this.resetCountry}
                    searchCallback={this.resolveCountryData}
                    isLoading={this.state.loading}
                    reload={this.resolveCountryData}
                />
                <Front globalCovidData={this.globalCovidData}/>
                <SearchContainer
                    searchCallback={this.searchCountry}
                />
                <CardsContainer data={this.data}/>
            </div>
            )
    }
};

export default Area

