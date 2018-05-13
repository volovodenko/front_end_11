import React, { Component } from 'react';
import './Article.css';

class Article extends Component {

    render() {
        let author = this.props.data.author;
        let text = this.props.data.text;

            return (
                <div className="News_Article">
                    <p className="newsAuthor">{author}:</p>
                    <p className="newsText">{text}</p>
                </div>
            )

    }

    propTypes: {
        author: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    }
}


export default Article;
