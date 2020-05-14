import React from 'react';
import ErrorButton from "./ErrorButton";

const ErrorModal = (props) => {
    let errorMessage;
    if (props.hasError) {
        if ( props.hasError.area === "news"){
            errorMessage = "Please try again in a minute"
        }
        if (props.hasError.area === "country Covid"){
            errorMessage = "idk"
        }
        else {
            errorMessage = "Please try again in a minute"
        }
    }

    const isActive = props.hasError ? "error-modal-container_active" : ""
        return(
            <div className={`error-modal-container ${isActive}`}>
                <div className="error-modal"> 
                    <div className="error-modal-text">
                        We had an error. Please try again
                        : {props.hasError.code ? `code ${props.hasError.code}` : null}
                        {errorMessage}
                    </div>
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

export default ErrorModal