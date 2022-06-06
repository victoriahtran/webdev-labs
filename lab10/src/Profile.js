import React from 'react';
import { getHeaders } from './utils';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        // constructor logic
        this.state = { profile : [] }
        this.fetchProfile = this.fetchProfile.bind(this)
        console.log('Profile component created');
    }

    fetchProfile() {
        fetch('/api/profile', {
            method: "GET",
            headers: getHeaders()
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ profile: data })
            })
    }

    componentDidMount() {
        this.fetchProfile()
        console.log('Profile component mounted');
    }

    render() {
        return (
            <div className="currentuser">
                <img src={this.state.profile.image_url} alt="user profile pic" />
                <div className="currentusername">{this.state.profile.username}</div>
            </div>
        );
    }
}

export default Profile;