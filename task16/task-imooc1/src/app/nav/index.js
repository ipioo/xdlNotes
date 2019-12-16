import React, { Component } from 'react';
import NavLeft from "./compent/NavLeft";
import NavRight from "./compent/NavRight";
import {Clearfix} from "../common/util/index"


class Nav extends Component{
    render (){
        return (
            <div className="nav">
                <NavLeft />
                <NavRight />
                <Clearfix />
            </div>
        );
    };
}

export default Nav;