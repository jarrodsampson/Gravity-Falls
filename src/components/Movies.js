import React, { Component } from 'react';

export default class Movies extends Component {

    render () {
        return (
            <div className="col s12 movieList">
                <div className="col s12">
                    <div className="col l6 m6 s12">
                         <img src={this.props.data.Poster} alt={this.props.data.Title} />
                    </div>
                    <div className="col l6 m6 s12">
                        <h2>{this.props.data.Title}</h2>

                                        <p>{this.props.data.Plot}</p>
                                        <p><em>{this.props.data.Awards}</em></p>
                    </div>
                </div>

            </div>
        );
    }

}