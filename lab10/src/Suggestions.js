import React from 'react';
import Suggestion from './Suggestion';

class Suggestions extends React.Component {

    constructor(props) {
        super(props);
        //initialization code here
        console.log("Suggestions constructed")
    }

    componentDidMount() {
        // fetch posts and then set the state
        console.log("Suggestions component mounted")
    }

    render () {
        return (
            <div className ="suggestions">
                <p className="suggestion-text">Suggestions for you </p>
                <div>Suggestions</div>
            </div>
        );
    }
}

export default Suggestions;