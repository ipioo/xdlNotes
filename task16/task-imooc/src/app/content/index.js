import React, { Component } from 'react';
import ListcontentZero from "./compent/ListcontentZero";
import ListcontentOne from "./compent/ListcontentOne";
import ListcontentTwo from "./compent/ListcontentTwo";
import ListcontentThree from "./compent/ListcontentThree";
import ListcontentFour from "./compent/ListcontentFour";
import ListcontentFive from "./compent/ListcontentFive";
import Munu from "./compent/munu";



class Content extends Component{
    render (){
        return (
            <div className="content">
                <Munu />
                <ListcontentZero />
                <ListcontentOne />
                <ListcontentTwo />
                <ListcontentThree />
                <ListcontentFour />
                <ListcontentFive />
            </div>
        );
    };
}

export default Content;