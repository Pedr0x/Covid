import React from 'react';
import InfoBannerItem from "./InfoBannerItem";

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upd: 1
        }
        this.data = { 
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
                    TotalRecovered : recovered,
                     TotalDeaths : deaths, 
                     TotalConfirmed: confirmed
                } = res.Global;

                this.data = {
                    recovered, 
                    deaths,
                    confirmed
                }
                this.setState({
                    upd: 1
                })
            })
      }
    render(){
        const {recovered, confirmed, deaths} = this.data
        return(
            <div className="info-banner-container">
                <InfoBannerItem label="Deaths" number={deaths}/>
                <InfoBannerItem label="Confirmed" number={confirmed}/>
                <InfoBannerItem label="Recovered" number={recovered}/>
            </div>
        )
    }
}

export default InfoCard;