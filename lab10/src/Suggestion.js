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