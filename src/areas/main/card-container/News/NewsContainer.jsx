import React from 'react';
import NewsItem from './NewsItem';
const _ = require('lodash');

const NewsContainer = (props) => {
    return(
        <div className="news-container">
            <h3 className="news-container-title"> 
                Coronavirus news in {props.country}
            </h3>
                {props.data
                    ? props.data.map(elem => 
                        <NewsItem data={elem} key={_.uniqueId()}/> )
                    : null
                }
        </div>
    )
}

export default NewsContainer