import React, { Component } from 'react';
import LeftFooter from "./compent/LeftFooter";
import RightFooter from "./compent/RightFooter";
import {Clearfix} from "../common/util/index"


class Footer extends Component{
    render (){
        return (
            <div className="footer">
                <LeftFooter />
                <RightFooter />
                <Clearfix />
            </div>
        );
    };
}

export default Footer;