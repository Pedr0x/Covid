import React from 'react';

    const ErrorButton = (props) => {
        const {area} = props.hasError
        function resetData(){
            props.searchCallback();
            props.getCountries();
        }
        if (props.hasError){
            if (area === "news" || area === "countryPopulation" ){
                
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