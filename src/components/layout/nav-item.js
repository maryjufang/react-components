import React, { Component } from 'react';
class NavItem extends Component {
  render() {
    return (
      <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        {this.props.label}
      </a>
    );
  }
}

export default NavItem;
