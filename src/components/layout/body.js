import React, { Component } from 'react';
class Body extends Component {
  render() {
    return (
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className="lg:flex -mx-6">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Body;
