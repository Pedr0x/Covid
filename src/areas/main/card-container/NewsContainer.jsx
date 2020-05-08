import React from 'react';
import NewsItem from './NewsItem';
const _ = require('lodash');

const API_KEY= "d9dec0e748f54b529c66312f71823af3";

class NewsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
        this.newsData = []
        this.getNewsData = this.getNewsData.bind(this)
    }
    componentDidMount(){
        this.getNewsData();
    }
    getNewsData(){
        var url = 'http://newsapi.org/v2/everything?' +
        `q=coronavirus+${this.props.country.replace(/\s/g, '')}&`+
        'from=2020-05-08&' +
        'sortBy=popularity&' +
        'apiKey=d9dec0e748f54b529c66312f71823af3';

          fetch(url)
            .then(res => res.json())
            .then(res => this.newsData = res.articles)
            .then(res => console.log(this.newsData))
            .catch(err => this.newsData = [])
    }
        render(){
            return(
                <div className="news-container">
                    {this.newsData
                        ? this.newsData.map(elem => 
                            
                            <NewsItem data={elem} key={_.uniqueId()}/> )
                        : null
                    }

                </div>
            )
        }
}

export default NewsContainer