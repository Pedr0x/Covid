import React from 'react';

const NewsItem = (props) => {
    const {title, url, description, urlToImage, source} = props.data;
    return(
        <div className="news-item-container">
             <div className="news-item-source">
                    {source.name}
                </div>
            <div className="news-img-container"> 
                <div 
                    className="news-img" 
                    style={{background : `url(${urlToImage})`}}
                />
            </div>
            <div className="news-item-text"> 
                <a className="news-item-title" href={url}> {title}</a>
                <p className="news-item-description">
                    {description}
                </p>
            </div>
        </div>
    )
};

export default NewsItem