import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Area from "./Area";

const Main = () =>{
    return(
    <div className="main-container-super">
        <Header/>
        <Area/>
        <Footer/>
    </div>
    )
};

export default Main