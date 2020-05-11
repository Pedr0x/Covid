import React from 'react';
import NewsItem from './NewsItem';
const _ = require('lodash');

const NewsContainer = (props) => {
    return(
        <div className="news-container">
            <h3 className="news-container-title"> 
                Coronavirus news in asds
            </h3>
                {props.newsData
                    ? props.data.map(elem => 
                        <NewsItem data={elem} key={_.uniqueId()}/> )
                    : null
                }}
        </div>
    )
}

export default NewsContainer