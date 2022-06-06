import React from 'react';
<<<<<<< HEAD
import Suggestion from './Suggestion';
=======
import { getHeaders } from './utils';
import Suggestion from './Suggestion'
>>>>>>> de436f162ab0c7e54b57c03bf1a25fb47c0a1fda

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