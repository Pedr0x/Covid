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
        this.getDataAjax = this.getDataAjax.bind(this);        
        
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

    getDataNew(){
        const API_LINK = `https://api.covid19api.com/dayone/country/${this.data.country}`;
        const getCovidData =  async () => {
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
            .then(res => this.getApisData())
            .catch(err => {this.setState({
                err: true
            })})
}

    getDataAjax(){
        const API_LINK = `https://api.covid19api.com/dayone/country/${this.data.country}`;
        const getCovidData = (API_LINK) => {
            return new Promise((resolve, reject ) => {
                let req = new XMLHttpRequest();
                req.responseType = "json";
                req.open('GET', `https://api.covid19api.com/dayone/country/${this.data.country}`, true);
                req.send();
                req.onreadystatechange = () => {
                    if (req.readyState === 4) {
                        if (req.status === 200) {
                            resolve(req);
                        } else {
                            reject("didnt work")
                        }
                    }
                }
            })
            }
            getCovidData()
                .then(res => (res.response))
                .catch(err => (err));

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
                                reject("didnt work");
                            }
                        }
                    }
                })
            }

             const getNewsData = async () => {
                const countryNews = await fetch(newsEndpoint)
                    .then(res => res.json())
                    .then(res =>res.articles);
                return(countryNews)
            }

            Promise.all([getCardData(), getNewsData()])
                .then(values => { 
                    const [infectedPopulation, newsData] = values;
                    this.data.actualData.infectedPopulation = infectedPopulation;
                    this.data.newsData = newsData;
                    this.setState({
                        upd:1
                    });
                    })
                .catch(reason => { 
                    console.log(reason)
                this.setState({
                    err:true
                });
              });
         
        }
        getAsyncApiData();
}
    searchCountry(data){
        this.data.country = data;
        this.getData();
    }

    render(){
        console.log(this.state.err)
        return(
            <div className="Area">
                <div onClick={() => this.getDataAjax()}>
                    </div>
                <SearchContainer 
                    searchCallback={this.searchCountry}
                />
                <CardsContainer data={this.data}/>
            </div>
            )
    }
}

export default Area

