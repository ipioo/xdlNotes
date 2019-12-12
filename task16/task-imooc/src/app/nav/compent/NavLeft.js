import React, {Component} from "react";
import Navdata from "../links/data";
class NavLeft extends Component{


    render() {
        console.log(Navdata.NavbarTitle);
        return (
            <div className="navLeft">
                <div className="logoPic">
                    <img src={Navdata.NavImg}  alt="" />
                </div>
                <div className="navbar">
                    <ul className="navbarList">
                        {
                            Navdata.NavbarTitle.map((val,key)=>{
                                return (
                                    <li key={key}><a href={val[0]}>{val[1]}</a></li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className={"search"} style={{"position": "relative"}}>
                    <input className="searchIput" type="text" name="search" placeholder="search" />
                    <i className="fa fa-search"></i>
                    <div className="searchLl">
                        {
                            Navdata.NavSearchList.map((val,key)=>{
                                return (<button key={key}>{val}</button>);
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default NavLeft;