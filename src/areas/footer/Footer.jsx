import React from 'react';
import logo from "./github-logo.png"

const Footer = () =>{
    return(
        <footer className="footer-container">
             <a href="https://github.com/Pedr0x/Covid"  className="github-icon">
                 <img alt="github-logo" src={logo}/>
             </a>
        </footer>
    )
}

export default Footer