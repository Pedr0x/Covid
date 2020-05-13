import React from 'react';

const ErrorModal = (props) => {
    const isActive = props.hasError ? "error-modal-container_active" : ""
    return(
        <div className={`error-modal-container ${isActive}`}>
            <p className="error-modal-text">
                We had an error. Please try again
            </p>
            <button onClick={props.searchCallback} className="error-modal-btn">
            ads
            </button>
        </div>
        )
}

export default ErrorModal