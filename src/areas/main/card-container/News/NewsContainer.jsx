import React from 'react';
import NewsItem from './NewsItem';
const _ = require('lodash');

const API_KEY= "d9dec0e748f54b529c66312f71823af3";

class NewsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            upd:1
        }
        this.newsData = []
        this.getNewsData = this.getNewsData.bind(this)
    }
    componentDidMount(){
        this.getNewsData()
        console.log(this.props.country)
    }
    
    componentDidUpdate(){
        this.getNewsData()
        console.log("asdadasdasd")
    }
  
    
    getNewsData(){
        const country = encodeURI(this.props.country);
        const url = 'http://newsapi.org/v2/everything?' +
        `q=coronavirus+${country}&`+
        'from=2020-05-08&' +
        'sortBy=popularity&' +
        'apiKey=d9dec0e748f54b529c66312f71823af3';
        console.log(url)
         fetch(url)
            .then(res => res.json())
            .then(res => this.newsData = res.articles)
            .then(res => this.setState({
                data:res
            }))
            .catch(err => this.newsData = []);
        }
        render(){
            return(
                <div className="news-container">
                    <h3 className="news-container-title"> 
                     Coronavirus news in {this.props.country}
                    </h3>
                     {this.state.data
                        ? this.state.data.map(elem => 
                            <NewsItem data={elem} key={_.uniqueId()}/> )
                        : null
                    }}

                </div>
            )
        }
}

export default NewsContainer