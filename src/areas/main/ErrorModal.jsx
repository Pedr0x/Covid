import React from 'react';
import ErrorModalInfo from "./ErrorModalInfo";

import SpinnerContainer from "./SpinnerContainer";

const ErrorModal = (props) => {
  
    const {hasError, isLoading} = props
    const isActive = hasError  || isLoading ? "error-modal-container_active" : "";
            return(
                <div className={`error-modal-container ${isActive}`}>
                   
                        {hasError 
                        ?  <ErrorModalInfo  
                                resetCountry={props.resetCountry} 
                                hasError={props.hasError}
                                searchCallback={props.searchCallback}
                                getCountries={props.getCountries} 
                            /> 
                        : <SpinnerContainer/>
                    }
            </div> 
            )
        }

    
export default ErrorModal