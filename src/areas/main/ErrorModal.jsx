import React from 'react';
import ErrorButton from "./ErrorButton";
import SpinnerContainer from "./SpinnerContainer";

const ErrorModal = (props) => {
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
        const  fullError = () => ( 
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
        )
    const {hasError, isLoading} = props
    const isActive = hasError  || isLoading ? "error-modal-container_active" : "";

            return(
                <div className={`error-modal-container ${isActive}`}>
                    <div className="error-modal"> 
                        {hasError ?  fullError : <h3> loading </h3>
                        }
                    </div>
            </div> 
            )
        }

     

export default ErrorModal