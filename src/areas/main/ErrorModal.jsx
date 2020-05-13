import React from 'react';

const ErrorModal = (props) => {
    const ErrorButton = (props) => {
        if (props.hasError){
        if (props.hasError.area === "news"){
            return(
                <button 
                    onClick={props.searchCallback} 
                    className="error-modal-btn"
                >
                Search Again
                </button>
            )
        }  else {
                return (
                    <button 
                        onClick={props.resetCountry} 
                        className="error-modal-btn"
                    >
                    Search Again for a different Country
                    </button>
                )
            }
        } else {
            return <h4> no error but you cant see this</h4>
        }
    }

    const isActive = props.hasError ? "error-modal-container_active" : ""
        return(
            <div className={`error-modal-container ${isActive}`}>
                <div className="error-modal"> 
                    <p className="error-modal-text">
                        We had an error. Please try again
                        : {props.hasError.code ? `code ${props.hasError.code}` : null}
                    </p>
                    <ErrorButton 
                    resetCountry={props.resetCountry} 
                    hasError={props.hasError} 
                />
                </div>
        </div> 
        )
}

export default ErrorModal