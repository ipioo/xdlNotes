import React, { Component } from 'react';
import Nav from "./nav/index";
import Content from "./content";
import Footer from "./footer";
// import "./common/assets/index.scss";
class App extends Component{
  render (){
    return (
        <div>
            <Nav />
            <Content />
            <Footer />
        </div>
    );
  };
}
export default App;

