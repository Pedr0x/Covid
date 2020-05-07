import React from 'react';
import InfoBannerItem from "./InfoBannerItem";

class InfoBanner extends React.Component {
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
            <div className="info-banner-container">
                <InfoBannerItem label="Deaths" number={deaths}/>
                <InfoBannerItem label="Confirmed" number={confirmed}/>
                <InfoBannerItem label="Recovered" number={recovered}/>
            </div>
        )
    }
}

export default InfoBanner;