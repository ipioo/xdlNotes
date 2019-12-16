import React, {Component} from "react";
import Navdata from "../links/data";

class NavRight extends Component{

    render() {
        return (
            <div className="navRight ">
                <ul className="navbarRightList">
                    {
                        Navdata.NavrightTItle.map((val, key)=>{
                            return (
                                <li id={key}><a href={val[0]}><i className={val[1]}> {val[2]}</i></a></li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default NavRight;