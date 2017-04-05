import React, { Component } from 'react';

import './css/animate.css';
import './css/main.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/swipebox.css';

import $ from 'jquery';

import CharacterList from './CharacterList';
import CommunityList from './CommunityList';
import Movies from './Movies';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            community: [],
            movies: [],
            childVisible: false,
            details: {}
        };
    }

    loadCommentsFromServer () {

        $.when(
            $.get("//www.reddit.com/r/gravityfalls/new.json?limit=20"),
            $.get("/data/characters.json"),
            $.get("//www.omdbapi.com/?t=gravity%20falls&r=json")

        ).then(function(community, characters, movies) {
            this.setState({
                characters: characters[0],
                community: community[0].data.children,
                movies: movies[0]
            });
            console.log(characters[0]);
            console.log(community[0].data.children);
            console.log(movies[0]);
        }.bind(this));

    }

    componentDidMount () {
        this.loadCommentsFromServer();
    }


  render() {
    return (
      <div className="App">
          <div className="topHolder"></div>
              <div className="top">

                  <div className="parallax first" data-stellar-background-ratio="-0.95"></div>
                  <div className="parallax second" data-stellar-background-ratio="0.6"></div>

              </div>


          <div className="superBump"></div>

          <div className="summaryBg">
              <div className="container">
                  <div className="wow fadeInLeft col s12 center-align scrollspy" id="about">
                      <div className="col s12 spacer-small"></div>
                      <h1>About</h1>

                      <p>
                          We Bare Bears follows three adoptive bear brothers: Grizzly, Panda and Ice Bear. The bears attempt to integrate with human society, such as by purchasing food, making human companions or trying to become famous on the Internet, although these attempts see the bears struggle to do so due to the civilized nature of humans and their own animal instincts. However, in the end, they figure out that they have each other for support. One notable aspect of the show's humor is the bears' ability to form a "bear stack". As its name implies, the bears stack on top of each other, which serves as their unique way of transportation.
                      </p>
                      <p>
                          <a className="waves-effect waves-light btn modal-trigger pink accent-2" href="https://en.wikipedia.org/wiki/We_Bare_Bears" target="_blank">Learn More</a>
                      </p>
                  </div>

                  <div className="col s12 spacer-small"></div>

              </div>
          </div>

          <div className="videoMain">

              <video id="self1" className="html5-video player" width="100%" loop="true" autoPlay="true" muted>
                  <source src="media/main.mp4" width="100%" type="video/mp4">
                  </source>
              </video>

          </div>

          <div className="charactersBg">

              <div className="row scrollspy" id="characters">
                  <div className="col s12 center-align no-padding">
                      <div className="col s12 spacer-small"></div>
                      <h1>Characters</h1>
                      <div className="col s12 spacer-x-small"></div>
                      <div className="col l12 m12 s12 no-padding">
                          <CharacterList data={this.state.characters} />
                      </div>

                  </div>
              </div>
          </div>

          <div className="parallax-container">
              <div className="parallax"><img src="images/art1.jpg" alt="Banner" /></div>
              <h2>On The Lookout</h2>
          </div>

          <div className="communityBg">
              <div className="container">
              <div className="row wow fadeInLeft col s12 center-align scrollspy" id="community">
                  <div className="col s12 spacer-small"></div>
                  <h1>The Community</h1>

                  <CommunityList data={this.state.community} />

                  <div className="col s12 spacer-small"></div>

              </div>
              </div>
          </div>

          <div className="moviesBg">
              <div className="row wow fadeInLeft col s12 center-align scrollspy" id="movies">
                  <div className="col s12 spacer-small"></div>
                  <h1>Season Details</h1>

                  <Movies data={this.state.movies} />

                  <div className="col s12 spacer-small"></div>

              </div>
          </div>

      </div>
    );
  }
}

export default App;
