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
                    name={characters.name}
                    key={characters.image}
                />
            );
        }, this);
        return (
            <div className="characterList">
                <OwlCarousel slideSpeed={300} items={4} itemsTablet={[1125,4]} itemsMobile={[700,2]} stopOnHover={true} lazyLoad={true} autoPlay={true} singleItem={false}>
                    {characterList}
                </OwlCarousel>
            </div>
        );
    }

}