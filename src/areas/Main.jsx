import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Area from "./main/Area";
import Front from "./front/Front";

const Main = () =>{
    return(
    <div className="main-container-super">
        <Header/>
        <Front/>
        <Area/>
        <Footer/>
    </div>
    )
};

export default Main