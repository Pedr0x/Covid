import React from 'react';
import InfoCardItem from "./InfoCardItem";

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        // No llames this.setState() aquí!
        this.state = { 
            recovered: "loading",
            confirmed:"loading",
            deaths: null
        };
      }
      componentDidMount(){
        const API_LINK = "https://api.covid19api.com/summary";

          fetch(API_LINK)
            .then(res => res.json())
            .then(res => {
                const {
                    TotalRecovered,
                     TotalDeaths, 
                     TotalConfirmed
                } = res.Global;

                this.setState({
                    recovered: TotalRecovered,
                    deaths: TotalDeaths,
                    confirmed: TotalConfirmed
                })
            })
      }
    render(){
        const {recovered, confirmed, deaths} = this.state
        return(
            <div className="info-card-container">
                <h3 className="info-card-title"> Global Data</h3>
                <InfoCardItem label="Deaths" number={deaths}/>
                <InfoCardItem label="Confirmed" number={confirmed}/>
                <InfoCardItem label="Recovered" number={recovered}/>
            </div>
        )
    }
}

export default InfoCard;