import React from 'react';
import Fuse from "fuse.js";
const _ = require('lodash');
class SearchMainInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            upd: true
        };
        this.countries = [];
         this.options = {
            keys: [
              "Country",
              "ISO2",
            ]
          };
          this.searchValue = "";
          this.searchResults = []
          this.getInputdata = this.getInputdata.bind(this);        
          this.validateCountry = this.validateCountry.bind(this);    
          this.getSearchValue = this.getSearchValue.bind(this);        
    
    }

    componentDidMount() { 
        fetch("https://api.covid19api.com/countries")
            .then(res => res.json())
            .then(res => {
                this.countries = res;
            })
    }

    validateCountry(){
        const fuse = new Fuse(this.countries, this.options);
        const pattern = this.searchValue;
        this.searchResults =  fuse.search(pattern).slice(0,5);
        console.log(this.searchResults);
        this.setState({
            upd:true
        })
    }

    getInputdata(e){
        this.searchValue = e.target.value;
    }

    getSearchValue(value){
        console.log(value)
    }

    render(){
        return(
            <React.Fragment> 
            <div className="search-main-input-container">
                 <input  
                    placeholder="Search country" 
                    className="search-main-input" 
                    type="text"
                    onChange={this.getInputdata}
                />
                <button 
                    className="search-main-button"
                    onClick={this.validateCountry}    
                >
                    Search
                </button>
            </div>
        <div className="search-res-container">
            <div className="search-res-item">
                { this.searchResults 
                    ? this.searchResults.map(elem => 
                            <div  
                                key={_.uniqueId()} 
                                className="search-res-item" 
                                onClick={() => this.props.searchCallback(elem.item.Country)}
                            > 
                                {`${elem.item.Country}`}
                            </div>
                        )
                    : null
            }
            </div>
        </div>
            </React.Fragment> 

        )
    }
}

export default SearchMainInput