import React from 'react';

    const ErrorButton = (props) => {
        const {area} = props.hasError
        function resetData(){
            props.searchCallback();
            props.getCountries();
        }

        if (props.hasError){
            if (area === "news" || area === "countryPopulation" ){
                //bad request on news or countryPopulation
                //repeat request
                return(
                    <button 
                        onClick={props.searchCallback} 
                        className="error-modal-btn"
                    >
                        Search Again
                    </button>
                )
            } 
            if (props.hasError.area === "allCountries"){
                //bad response  getting all countries data
                //reset every request
                return(
                    <button 
                        onClick={resetData} 
                        className="error-modal-btn"
                    >
                        Reset
                    </button>
                )
            }
            else {
                //invalid response on countries covid data 
                //search for a different country
                return (
                    <button 
                        onClick={props.resetCountry} 
                        className="error-modal-btn"
                    >
                        Reset
                    </button>
                )
            }
        } else {
            return null
        }
    }

    export default ErrorButton