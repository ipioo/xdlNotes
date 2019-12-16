import React, { Component} from "react";
import MunuLeft from "./munu/MunuLeft";
import MunuRight from "./munu/MunuRight";
import {Clearfix} from "../../common/util/index"
class Munu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            key: "",
        }
    }

    leftCallback = (key) => {
        this.setState({key:key});
    };

    render() {

        return (
            <div className="munu" onMouseOut={()=>{
                this.setState({key:0})
            }}>
                <MunuLeft callback={this.leftCallback} />
                <MunuRight LeftIndex={this.state.key} />
                <Clearfix />
            </div>
        );
    }
}

export default Munu;