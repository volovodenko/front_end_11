import React, { Component } from 'react';
import NewsCount from './NewsCount';
import Article from './Article';
import './News.css';

class News extends Component {

    render() {
        let newsData = this.props.data;

        let newsTemplate = newsData.map(function(item, index){
            return (
                <Article data={item} key={index} />
            )
        });

        let newsLength = newsTemplate.length;



        return (
            <div className="News">
                {!!newsLength ? newsTemplate : "Новостей нет"}

                <NewsCount total={newsLength}/>
            </div>
        );
    }

    propTypes: {
        data: React.PropTypes.array.isRequired
    }
}


export default News;
