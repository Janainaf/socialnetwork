import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>
        {/* <p>{this.props.post.author}</p>
        <p>{this.props.post.date}</p> */}
      </div>
    );
  }
}
export default Post;
