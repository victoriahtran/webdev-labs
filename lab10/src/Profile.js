import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        //initialization code here
        console.log("Profile constructed")
    }

    componentDidMount() {
        // fetch posts and then set the state
        console.log("Profile component mounted")
    }

    render () {
        return (
            <header> Profile </header>
        );
    }
}

export default Profile;