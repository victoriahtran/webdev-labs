import React from 'react';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        //initialization code here
        console.log("Navbar constructed")
    }

    componentDidMount() {
        // fetch posts and then set the state
        console.log("Navbar component mounted")
    }

    render () {
        return (
            <nav className="main-nav">
                <h1>Photo App</h1>
            </nav>
        );
    }
}

export default Navbar;