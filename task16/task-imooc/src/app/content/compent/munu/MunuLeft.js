import React, { Component} from "react";
import Munudata from "./links/data";
class MunuLeft extends Component{

    render() {
        return (
            <div className="munuLeft">
                <ul className="muluLeftList">
                    {
                        Munudata.MunuLeftListData.map((val,key)=>{
                            return(
                                <li key={key}>{val}<i className="fa fa-angle-right "></i></li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MunuLeft;