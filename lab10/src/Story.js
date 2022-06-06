import React from 'react';

class Story extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            story: this.props.model
        }
        //initialization code here
        console.log("Story constructed")
    }

    componentDidMount() {
        console.log("Stories component mounted")
    }

    render () {
        return (
            <div class="stories">
                <img src={ stories.user.thumb_url } alt = "User's profile picture in story"/>
                <p>{ stories.user.username }</p>
            </div>
        );
    }
}

export default Story;