import React from 'react';
import ErrorButton from "./ErrorButton";

const ErrorModalInfo = (props) => {
    const {hasError} = props;
    let errorMessage = null;
    if (hasError) {
        if ( hasError.area === "news" || hasError.area === "countryPopulation"){
            errorMessage = "Please try again in a minute. We couldnt get that country´s data";
        }
        if (props.hasError.area === "country Covid"){
            errorMessage = "We dont have that country´s data";
        }
        else {
            errorMessage = "Please try again in a minute default value";
        } 
    }
    
    return(
        <div className="error-modal"> 
            <div className="error-modal-text">
            We had an error:
            {hasError.code ? `code: ${props.hasError.code}` : null}
            {errorMessage}
            <div>
                <ErrorButton 
                    resetCountry={props.resetCountry} 
                    hasError={props.hasError}
                    searchCallback={props.searchCallback}
                    reload={props.reload}
                />
            </div>
        </div>
    </div>
    )
}

export default ErrorModalInfo