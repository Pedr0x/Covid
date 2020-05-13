import React from 'react';

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
                    <div className="header-item">
                    <span className="material-icons">
                        search
                    </span>
                    </div>
                    <div className="header-item">
                        <span className="material-icons">
                            show_chart
                        </span>
                    </div>
                    <div className="header-item">
                        <span className="material-icons">
                            public
                        </span>
                    </div>
                    <div className="header-item">
                    <span className="material-icons">
                        trending_up
                    </span>
                </div>
                </div>
            </header>
        </div>
    )
}

export default Header
