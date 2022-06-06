import React from 'react';
import { getHeaders } from './utils';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { profile : [] }
        this.fetchProfile = this.fetchProfile.bind(this)
        //initialization code here
        console.log("Navbar constructed")
    }

    componentDidMount() {
        // fetch posts and then set the state
        this.fetchProfile()
        console.log("Navbar component mounted")
    }

    fetchProfile() {
        fetch('/api/profile', {
            method: "GET",
            headers: getHeaders()
        })
            .then(response => response.json())
            .then(data => {
                console.log("navbar")
                console.log(data)
                this.setState({ profile: data })
            })
    }

    render () {
        return (
            <nav className="main-nav">
                <h1>Photo App</h1>
                <ul>   
                    <li><a href="/api">API Docs</a></li>
                    <li><span>{this.state.profile.username}</span></li>
                    <li><a href="/logout">Sign out</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;