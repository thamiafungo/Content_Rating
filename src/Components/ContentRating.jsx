
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
    likes: 0,
    dislikes: 0
  };
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1
    }));
  };

  handleDislike = () => {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1
    }));
  };


  render() {
    return (
     <>
      <div className="content-rating">
          <p>There's a new release of horror movie. Do you want to watch?</p>
          <div className="rating-buttons">
            <button onClick={this.handleLike}>
              👍 Like {this.state.likes}
            </button>
            <button onClick={this.handleDislike}>
              👎 Dislike {this.state.dislikes}
            </button>
          </div>
        </div>
     </>
    );
  }
}

export default ContentRating;
