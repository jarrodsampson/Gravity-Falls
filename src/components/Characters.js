import React, { Component } from 'react';

export default class Character extends Component {

    render () {
        return (
            <div>
                <a className="swipebox" href={"images/characters/" + this.props.image} title={this.props.name} rel="gallery-1">
                    <img
                        className="lazyOwl"
                        data-src={"images/characters/" + this.props.image}
                        src={"images/characters/" + this.props.image}
                        alt={this.props.name} />

                    <div className="titleIt">
                        <p>{this.props.name}</p>
                    </div>
                </a>
            </div>
        );
    }

}