import React from 'react';
import { getHeaders } from './utils';

class Bookmark extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.unbookmark = this.unbookmark.bind(this);
    }

    toggleBookmark(ev) {
        if (this.props.bookmarkId) {
            console.log('unbookmark');
            this.unbookmark();
        } else {
            console.log('bookmark');
            this.bookmark();
        }
    }

    bookmark () {
        console.log('code to bookmark the post');
        fetch('api/bookmarks', {
            headers: getHeaders(),
            method: "POST",
            body: JSON.stringify({ post_id: this.props.postId })

        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.props.requeryPost();
        });
    }

    unbookmark () {
        console.log('code to unbookmark the post');
        fetch(`api/bookmarks/${this.props.bookmarkId}`, {
            headers: getHeaders(),
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.props.requeryPost();
        });
    }

    render () {
        const bookmarkId = this.props.bookmarkId;
        return (
            <button role="switch"
                className="bookmark" 
                aria-label="Bookmark Button" 
                aria-checked={bookmarkId ? true : false}
                onClick={this.toggleBookmark}>
                <i className={bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>                        
            </button>
        ) 
    }
}

export default Bookmark;