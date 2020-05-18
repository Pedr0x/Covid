import React from 'react';

    const ErrorButton = (props) => {
        const {area, code} = props.hasError;
        
        if (props.hasError){
            if ((area === "news" || area === "countryPopulation") && (code < 400  || code > 500)){
                return(
                    <button 
                        onClick={props.reload} 
                        className="error-modal-btn"
                    >
                        Search Again
                    </button>
                )
            } 
            if (props.hasError.area === "globalCovid"){
                return(
                    <button 
                        onClick={props.reload} 
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