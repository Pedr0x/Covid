import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Area from "./main/Area";
import SupportBanner from "./support-banner/SupportBanner";
import Front from "./front/Front";
//import InfoBanner from "./info-banner/InfoBanner";

//import GlobalInfo from "./areas/global-info/GlobalInfo";
//<GlobalInfo/>


const Main = () =>{
    return(
    <div className="main-container-super">
        <Header/>
        <Front/>
        <Area/>
       <SupportBanner/>
        <Footer/>
    </div>
    )
};

export default Main