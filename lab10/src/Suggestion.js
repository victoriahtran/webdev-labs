/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';
import { getHeaders } from './utils';

class Suggestion extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            s : this.props.model,
            follow_id : null}
        this.follow = this.follow.bind(this)
        this.unfollow = this.unfollow.bind(this)
        this.toggleFollow = this.toggleFollow.bind(this)
    }

    componentDidMount() {
        console.log("Suggestion mounted")
        console.log(this.state.s)
    }

    toggleFollow(){
        if(this.state.follow_id){
            this.unfollow(this.state.follow_id)
        }
        else {
            this.follow(this.state.s.id)
        }
    }

    follow(id){
        const senddata = {"user_id": id}
        fetch("/api/following/", {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(senddata)
        })
        .then(response => response.json())
        .then(data=> {
            this.setState({
                s: this.props.model,
            follow_id : data.id})
        })
    }

    unfollow(follow_id){
        fetch("/api/following/" + follow_id,{
            method: "DELETE",
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                s:this.props.model,
                follow_id: null
            })
        })
    }

    render() {
        const s = this.state.s

        return (<div className="suggestion">
        <img src={s.thumb_url} alt="thumbnail" />
        <div>
            <p className="username">{s.username}</p>
            <p className="suggestion-text">suggested for you</p>
        </div>
        <div>
            <button 
                className="follow" 
                aria-label="Follow"
                aria-checked={this.state.follow_id? "True" : "False"}
                data-user-id={s.id}
                onClick={this.toggleFollow}>{this.state.follow_id? `unfollow` : `follow`}</button>
        </div>
    </div>)}
    

}

export default Suggestion
