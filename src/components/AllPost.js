import React, { Component } from "react";

import { connect } from "react-redux";

import Post from "./Post";

class AllPost extends Component {
  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading"> All posts</h1>
        {this.props.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(AllPost);
