import React from 'react';

class Story extends React.Component {

    constructor(props) {
        super(props);
        this.state = {story: this.props.model}
        //initialization code here
        console.log("Story constructed")
    }

    componentDidMount() {
        console.log("Stories component mounted")
    }

    render () {
        const story = this.state.story
        return (
            <div class="story">
                <img src={ story.user.thumb_url } alt="User's profile picture in story"/>
                <div class="storyuser">{ story.user.username }</div>
            </div>
        );
    }
}

export default Story;