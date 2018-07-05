import React, { Component } from 'react';
import NavBar from 'components/layout/nav-bar.js';
import NavItem from 'components/layout/nav-item.js';
import Body from 'components/layout/body.js';
import SideBar from 'components/layout/side-bar.js';
import Section from 'components/layout/section.js';
import Footer from 'components/layout/footer.js';
import 'App.css';

class App extends Component {
  render() {
    return (
      <div className="font-source-sans font-normal text-black leading-normal">
        {/* comment */}
        <NavBar>
          <NavItem label="Nav 1"></NavItem>
          <NavItem label="Nav 2"></NavItem>
        </NavBar>
        <Body>
          <SideBar></SideBar>
          <Section></Section>
        </Body>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
