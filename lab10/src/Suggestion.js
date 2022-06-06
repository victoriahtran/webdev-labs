<<<<<<< HEAD
import React from 'react';

class Suggestion extends React.Component {

    constructor(props) {
        super(props);
        //initialization code here
        console.log("Suggestion constructed")
    }

    componentDidMount() {
        // fetch posts and then set the state
        console.log("Suggestion component mounted")
    }

    render () {
        return (
            console.log("Suggestion rendered")
        );
    }
}

export default Suggestion;
=======
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';
import { getHeaders } from './utils';

class Suggestion extends React.Component {
    constructor(props){
        super(props)
        this.state = {s : this.props.model}
        this.follow = this.follow.bind(this)
        this.unfollow = this.unfollow.bind(this)
    }

    componentDidMount() {
        console.log("Suggestion mounted")
        console.log(this.state.s)
    }

    follow(){

    }

    unfollow(){

    }

    render() {
        const s = this.state.s
        return (<div class="suggestion">
        <img src={s.thumb_url} alt="thumbnail" />
        <div>
            <p class="username">{s.username}</p>
            <p class="suggestion-text">suggested for you</p>
        </div>
        <div>
            <button 
                class="follow" 
                aria-label="Follow"
                aria-checked="false"
                data-user-id={s.id}
                onclick="toggleFollow(event);">follow</button>
        </div>
    </div>)}
    

}

export default Suggestion
>>>>>>> de436f162ab0c7e54b57c03bf1a25fb47c0a1fda
