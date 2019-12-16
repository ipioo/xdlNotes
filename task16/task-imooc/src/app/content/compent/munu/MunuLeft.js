import React, { Component} from "react";
import Munudata from "./links/data";
class MunuLeft extends Component{
    constructor(props) {
        super(props);
        this.state = {
            "keyIndex":-1,
        };
    }
    muluLeftListonMouseEnter =(key)=>{
        let keyIndex = key;
        this.setState(keyIndex);
    };
    render() {
        let data = Munudata.MunuLeftListData;
        return (
            <div className="munuLeft">
                <ul className="muluLeftList">
                    {

                        data.map((val,key)=>{
                            return(
                                <li key={key} onMouseEnter={()=>{this.muluLeftListonMouseEnter(key)}}>{val}<i className="fa fa-angle-right "></i></li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MunuLeft;
