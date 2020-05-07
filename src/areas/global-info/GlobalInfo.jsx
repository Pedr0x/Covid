import React from 'react';
import GlobalNews from "./GlobalNews";
import GlobalData from "./GlobalData";

const GlobalInfo = () =>{
    return(
        <div className="global-info-container">
            <GlobalNews/>
            <GlobalData/>
        </div>
    )
}

export default GlobalInfo;