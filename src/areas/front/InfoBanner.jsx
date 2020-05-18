import React from 'react';
import InfoBannerCard from "./InfoBannerCard";

const InfoBanner = (props) => {
    return(
        <div className="info-banner-container">
            <InfoBannerCard 
                title="New Recovered"
                data={props.data.NewRecovered}
            />
             <InfoBannerCard 
                title="New Deaths"
                data={props.data.NewDeaths}
            />

             <InfoBannerCard 
                title="New Confirmed"
                data={props.data.NewConfirmed}
            />

        </div>
    )
}
export default InfoBanner