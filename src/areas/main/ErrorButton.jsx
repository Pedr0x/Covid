import React from 'react';

    const ErrorButton = (props) => {
        function resetData(){
            props.searchCallback();
            props.getCountries();
        }
        if (props.hasError){
            if (props.hasError.area === "news"){
                //bad request on news
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
                    Search Again
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
                    Search
                    </button>
                )
            }
        } else {
            return null
        }
    }

    export default ErrorButton