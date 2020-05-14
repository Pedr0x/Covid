import React from 'react';
import HeaderItem from "./HeaderItem"
const Header = () =>{
    return(
        <div className="header-container">
            <header> 
                <div className="header-item header-item-primary">
                    <h4 className="header-title_main">
                        covid tracker
                    </h4>
                </div>
                <div className="header-items-secondary"> 
                    <HeaderItem
                        icon={"search"}
                    />
                    <HeaderItem
                        icon={"public"}
                    />                    
                   <HeaderItem
                        icon={"trending_up"}
                    />
                </div>
            </header>
        </div>
    )
}

export default Header
