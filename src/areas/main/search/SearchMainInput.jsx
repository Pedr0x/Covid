import React from 'react';
import Fuse from "fuse.js";
import SearchInput from "./SearchInput";
import SearchResContainer from "./SearchResContainer";

class SearchMainInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            upd: true,
            searchValue: ""
        };
        this.countries = [];
         this.options = {
            keys: [
              "Country",
              "ISO2",
            ],
            minMatchCharLength: 1
          };
          this.searchResults = []
          this.getInputdata = this.getInputdata.bind(this);        
          this.validateCountry = this.validateCountry.bind(this);    
          this.normalize = this.normalize.bind(this);        
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
        const pattern = this.state.searchValue;
        this.searchResults =  fuse.search(pattern).slice(0,5);
        console.log(this.searchResults);
        this.setState({
            upd:true
        })
    }

    getInputdata(e){
        this.setState({
            searchValue: e.target.value
        });
        this.validateCountry()
    }

    normalize(data){
        this.props.searchCallback(data);
        this.searchResults= [];
        this.setState({
            upd:1
        });
    }
        render(){
            const activeContainer = 
                this.searchResults 
                    ? "search-res-container-super_active"
                    : "";
            console.log(activeContainer);
            return(
                <div onClick={() => console.log(this.countries)}> 
                    <SearchInput
                        validateCountry={this.validateCountry}
                        getInputdata={this.getInputdata}
                    />
                    <SearchResContainer 
                        callback={this.normalize}
                        activeContainer={activeContainer}
                        data={this.searchResults}
                    />
            </div> 
        )
        }
    }

export default SearchMainInput
/* 

<div  
className="search-res-item"
> 
{`${elem.item.Country}`}
</div> */