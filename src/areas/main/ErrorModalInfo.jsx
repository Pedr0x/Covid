import React from 'react';
import ErrorButton from "./ErrorButton";

const ErrorModalInfo = (props) => {
    let errorMessage = null;
    if (props.hasError) {
        if ( props.hasError.area === "news"){
            errorMessage = "Please try again in a minute";
        }
        if (props.hasError.area === "country Covid"){
            errorMessage = "We dont have that country´s data";
        }
        else {
            errorMessage = "Please try again in a minute";
        } 
    }
    
    return(
        <div className="error-modal"> 
            <div className="error-modal-text">
            We had an error:
            {props.hasError.code ? `code: ${props.hasError.code}` : null}
            {errorMessage}
            <div>
                <ErrorButton 
                    resetCountry={props.resetCountry} 
                    hasError={props.hasError}
                    searchCallback={props.searchCallback}
                    getCountries={props.getCountries} 
                />
            </div>
        </div>
    </div>
    )
}

export default ErrorModalInfo