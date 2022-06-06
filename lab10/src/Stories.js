import React from 'react';
import { getHeaders } from './utils';
import Story from './Story';

class Stories extends React.Component {

    constructor(props) {
        super(props);
        this.state = { stories : [] }
        this.fetchStories = this.fetchStories.bind(this)
        //initialization code here
        console.log("Stories constructed")
    }

    fetchStories() {
        fetch('/api/stories', {
            method: "GET",
            headers: getHeaders()
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ stories: data })
            })
    }


    componentDidMount() {
        this.fetchStories()
        console.log("Stories component mounted")
    }

    render () {
        return (
            <header className='stories'>
                {
                    this.state.stories.map(stories => {
                        return <Story model={stories} key={stories.id} />
                    })
                }
            </header>
        );
    }
}

export default Stories;