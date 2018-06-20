import React, { Component } from 'react';
class Section extends Component {
  render() {
    return (
      <div className="min-h-screen w-full lg:w-3/4 xl:w-4/5">
        <div className="content">
          <div className="flex">
            <div className="pt-24 pb-8 lg:pt-28 w-full">
              Body Section
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
