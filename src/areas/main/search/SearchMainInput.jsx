import React from 'react';
import Fuse from "fuse.js"
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
              "Slug"
            ]
          };
          this.searchValue = "";
          this.getInputdata = this.getInputdata.bind(this);        
          this.validateCountry = this.validateCountry.bind(this);        

    }

    componentDidMount() { 
        fetch("https://api.covid19api.com/countries")
            .then(res => res.json())
            .then(res => {
                this.countries = res;
                console.log(this.countries);
            })
        console.log(this.countries);
    }

    validateCountry(){
        const fuse = new Fuse(this.countries, this.options);
        const pattern = this.searchValue;
        console.log( fuse.search(pattern))
    }

    getInputdata(e){
        e.target.value = this.searchValue
    }
    render(){
        return(
            <div className="search-main-input-container">
                 <input  
                    placeholder="Search country" 
                    className="search-main-input" 
                    type="text"
                    onChange={this.getInputdata}
                />
                <button 
                    className="search-main-button"
                    onClick={this.props.searchCalback}    
                >
                    Search
                </button>
            </div>
        )
    }
}

export default SearchMainInput