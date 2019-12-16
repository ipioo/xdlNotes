import React, { Component } from 'react';
import Nav from "./nav/index";
import Content from "./content";
import Footer from "./footer";
import CommonCard from "./common";
class App extends Component{
  render (){
    return (
        <div>
            <Nav />
            <Content />
            <Footer />
            <CommonCard />
        </div>
    );
  };
}
export default App;

