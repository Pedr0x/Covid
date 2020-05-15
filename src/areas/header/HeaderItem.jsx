import React from 'react';

const HeaderItem = (props) => {
    return (
        <div className="header-item">
            <span className="material-icons">
                {props.icon}
            </span>
        </div>
    )
};

export default HeaderItem