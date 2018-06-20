import React, { Component } from 'react';
class SideBar extends Component {
  render() {
    return (
      <div className="hidden absolute z-90 top-16 bg-white w-full border-b -mb-16 lg:-mb-0 lg:static lg:bg-transparent lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5">
        <div className="lg:block lg:relative lg:sticky lg:top-16">
          SIDE BAR
        </div>
      </div>
    );
  }
}

export default SideBar;
