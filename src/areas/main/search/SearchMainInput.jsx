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
      
    validateCountry(){
        const fuse = new Fuse(this.props.countries, this.options);
        const pattern = this.state.searchValue;
        this.searchResults =  fuse.search(pattern).slice(0,3);
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
                <div> 
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
