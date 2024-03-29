import React, { Component } from 'react';
import Moment from 'react-moment';


export default class Community extends Component {

    render () {

        return (


        <a
                href={"https://reddit.com/" + this.props.permalink}
                target="_blank"
                className="collection-item">
                    <strong>{this.props.author}</strong> <br /><span className="">{this.props.title}</span> <em className="timeReddit"><Moment unix fromNow>{this.props.time}</Moment></em>
                <i className="material-icons right-align fullText">send</i>
            </a>
        );
    }

}