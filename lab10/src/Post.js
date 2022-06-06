import React from 'react';
import { getHeaders } from './utils';
import Bookmark from './Bookmark';
import LikeButton from './LikeButton';

class Post extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {
            post: this.props.model
        }

        this.requeryPost = this.requeryPost.bind(this)
    }

    requeryPost () {
        fetch(`/api/posts/${this.state.post.id}`, {
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.setState({ post: data });
        });
    }

    componentDidMount() {
        // fetch posts and then set the state...
        // console.log("Posts component mounted")
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
        const post = this.state.post;
        if (!post) {
            return (
                <div></div>  
            );
        }
        return (
            <section className="card">
                <div className="header">
                    <h3>{ post.user.username }</h3>
                    <i className="fa fa-dots"></i>
                </div>
                
                <img 
                    src={ post.image_url } 
                    alt={'Image posted by ' +  post.user.username } 
                    width="300" 
                    height="300" />
                
                <div className="info">
                    <div>
                        <LikeButton
                            postId = {post.id}
                            likeId = {post.current_user_like_id}
                            requeryPost={this.requeryPost} />

                        <Bookmark
                            postId = {post.id}
                            bookmarkId = {post.current_user_bookmark_id}
                            requeryPost={this.requeryPost} />
                    </div>
                    <p>{ post.caption }</p>
                </div>
            </section> 
        );     
    }
}

export default Post;