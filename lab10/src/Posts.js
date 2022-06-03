import React from 'react';
import { getHeaders } from './utils';
import Post from './Post';

class Posts extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        console.log("Posts constructed")
        this.state = {posts: []}
        this.fetchPosts = this.fetchPosts.bind(this)
    }

    componentDidMount() {
        // fetch posts and then set the state...
        console.log("Posts component mounted")
        this.fetchPosts();
    }

    fetchPosts() {
        fetch('/api/posts', {
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            this.setState({posts: data});
        })
    }

    render () {
        return (
            <div id="Posts">
                {
                    this.state.posts.map(post => {
                        return <Post model={post} key={post.id} />
                    })
                }
            </div>
        );     
    }
}

export default Posts;