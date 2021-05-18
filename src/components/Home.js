import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading"> Already a member?</h1>
        <label className="form">User email:</label>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            required
            ref={(input) => (this.getEmail = input)}
            type="text"
            placeholder="Enter email"
          />
          <br />
          <br />
          <br />
          <label class="username">Password</label>
          <br />
          <input
            required
            ref={(input) => (this.getPassword = input)}
            type="password"
            placeholder="Enter Password"
          />
          <br />
          <br />
          <br />
          <br />
          <button>Login</button>
          <div className="form">
            {" "}
            <p className="sub-text center">
              {" "}
              Don't have an account, <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
