import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

import Character from './Characters.js';

export default class CharacterList extends Component {

    render () {
        var characterList = this.props.data.map(function(characters) {
            //console.log(fanArt);
            return (
                <Character
                    image={characters.image}
                    description={characters.description}
                    key={characters.image}
                />
            );
        }, this);
        return (
            <div className="characterList">
                <OwlCarousel slideSpeed={300} items={2} itemsTablet={[1125,2]} itemsMobile={[700,1]} stopOnHover={true} lazyLoad={true} autoPlay={true} singleItem={false}>
                    {characterList}
                </OwlCarousel>
            </div>
        );
    }

}