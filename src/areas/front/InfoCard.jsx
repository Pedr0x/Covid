import React from 'react';
import InfoCardItem from "./InfoCardItem";

const InfoCard = (props) => {
    const {globalCovidData} = props;

    return(
        <div className="info-card-container">
            <h3 className="info-card-title"> Global Data</h3>
                {
                    props.globalCovidData 
                     ? <React.Fragment>
                            <InfoCardItem 
                                label="Deaths" 
                                number={globalCovidData.TotalDeaths} 
                                newData={globalCovidData.NewDeaths}
                            />
                            <InfoCardItem 
                                label="Confirmed"   
                                number={globalCovidData.TotalConfirmed}
                                newData={globalCovidData.NewConfirmed}

                                />
                            <InfoCardItem 
                                label="Recovered" 
                                number={globalCovidData.TotalRecovered}
                                newData={globalCovidData.NewRecovered}

                            />
                     </React.Fragment>
                     : <h2      className="info-card-loading-subtitle">
                         Loading
                     </h2>
                }
            </div>
        )
    }


export default InfoCard;