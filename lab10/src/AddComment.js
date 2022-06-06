import React from 'react';
import { getHeaders } from './utils';

class AddComment extends React.Component {
    constructor(props){
        super(props);
        this.postComment = this.postComment.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){

    }

    postComment(){
        const data = {
            "post_id" : this.props.postId,
            "text" : document.getElementById(`comment_on_${this.props.postId}`).value
        }
        fetch("/api/comments", {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        this.props.requeryPost()
    }

    render() {
        const pid = "comment_on_" + this.props.postId
        return (
            <div className="addcomment">
                <div className="iconandcomment">
                    <i className="far fa-smile"></i>
                    <input type="text" id={pid} placeholder="Add a comment..."></input>
                </div>
                <button data-post-id = {this.props.id} onClick={this.postComment}>Post</button>
            </div>
        )
    }

}

export default AddComment