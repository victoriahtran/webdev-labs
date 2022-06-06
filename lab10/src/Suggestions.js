import React from 'react';
import { getHeaders } from './utils';
import Suggestion from './Suggestion'

class Suggestions extends React.Component {

    constructor(props) {
        super(props);
        //initialization code here
        this.state = {suggs : []}
        this.fetchStories = this.fetchStories.bind(this)
        console.log("Suggestions constructed")
    }

    componentDidMount() {
        // fetch posts and then set the state
        this.fetchStories()
        console.log("Suggestions component mounted")
    }

    fetchStories(){
        fetch('/api/suggestions/', {
            method: "GET",
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            this.setState({suggs : data})
        })
    }

    render () {
        console.log("rendering")
        return (
            <div className="suggestions">
                {
                    this.state.suggs.map(sugg => 
                        {
                            console.log(sugg)
                            return <Suggestion model={sugg} key={sugg.id} />
                        })
                }
            </div>
        )
    }   
}

export default Suggestions;