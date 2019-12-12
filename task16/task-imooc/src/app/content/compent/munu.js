import React, { Component} from "react";
import MunuLeft from "./munu/MunuLeft";
import MunuRight from "./munu/MunuRight";
import {Clearfix} from "../../common/util/index"
class Munu extends Component{

    render() {
        return (
            <div className="munu">
                <MunuLeft />
                <MunuRight />
                <Clearfix />
            </div>
        );
    }
}

export default Munu;