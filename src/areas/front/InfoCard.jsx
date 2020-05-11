import React from 'react';
import InfoCardItem from "./InfoCardItem";

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasData: false
        };
        this.globalData = {
            recovered:null,
            deaths:null,
            confirmed:null
        }
    }
    componentDidMount(){
        const API_LINK = "https://api.covid19api.com/summary";
        fetch(API_LINK)
            .then(res => res.json())
            .then(res => {
                const {
                    TotalRecovered: recovered,
                     TotalDeaths: deaths, 
                     TotalConfirmed: confirmed
                } = res.Global;

                this.globalData = {
                    recovered,
                    deaths,
                    confirmed
                }
                this.setState({
                    hasData: true
                });
            });
      }

    render(){
        const {recovered, confirmed, deaths} = this.globalData;
        return(
            <div className="info-card-container" onClick={() => console.log(this.globalData)}>
                <h3 className="info-card-title"> Global Data</h3>
                {
                    this.state.hasData 
                     ? <React.Fragment>
                            <InfoCardItem label="Deaths" number={deaths}/>
                            <InfoCardItem label="Confirmed" number={confirmed}/>
                            <InfoCardItem label="Recovered" number={recovered}/>
                     </React.Fragment>
                     : <h2 className="info-card-loading-subtitle">
                         Loading
                     </h2>
                }
            </div>
        )
    }
}

export default InfoCard;