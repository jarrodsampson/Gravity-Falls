import React, { Component } from 'react';

export default class Movies extends Component {

    render () {
        return (
            <div className="movieList">
                <h2>{this.props.data.Title}</h2>
                <img src={this.props.data.Poster} alt={this.props.data.Title} />
                <p>{this.props.data.Plot}</p>
                <p><em>{this.props.data.Awards}</em></p>
            </div>
        );
    }

}