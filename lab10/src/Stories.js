import React from 'react';

class Stories extends React.Component {

    constructor(props) {
        super(props);
        //initialization code here
        console.log("Stories constructed")
    }

    componentDidMount() {
        console.log("Stories component mounted")
    }

    render () {
        return (
            <header className='stories'></header>
        );
    }
}

export default Stories;