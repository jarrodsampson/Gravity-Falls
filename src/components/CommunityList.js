import React, { Component } from 'react';

import Community from './Community.js';

export default class CommunityList extends Component {

    render () {
        var communityList = this.props.data.map(function(community) {
            return (
                <Community
                    title={community.data.title}
                    author={community.data.author}
                    image={community.data.thumbnail}
                    permalink={community.data.permalink}
                    time={community.data.created_utc}
                    key={community.data.title}
                />
            );
        }, this);
        return (
            <div className="CommunityList col s12">
                <div className="collection z-depth-3 left-align">
                    {communityList}
                </div>
            </div>
        );
    }

}