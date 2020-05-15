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
          this.searchResults = [];
          this.searchValue = "";
          this.getInputdata = this.getInputdata.bind(this);        
          this.normalize = this.normalize.bind(this);        
    }
  
    getInputdata(e){
        this.searchValue = e.target.value;
        const fuse = new Fuse(this.props.countries, this.options);
        const pattern = this.searchValue;
        this.searchResults =  fuse.search(pattern).slice(0,3);
        this.setState({
            upd:true
        });  
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
            return(
                <div> 
                    <SearchInput
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
