import React, { Component} from "react";
import Munudata from "./links/data";
class MunuRight extends Component{

    render() {
        return (
            <div className="munuRight">
                <div className="bannerList">
                    <div className="click">
                        <span className="left"><i className="fa fa-angle-left fa-3x"></i></span>
                        <span className="right"><i className="fa fa-angle-right fa-3x"></i></span>
                        <div className="clearfix"></div>
                    </div>
                    <div className="banner-anchor">
                        <span className="active"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="" className="banner">
                        <img className="bannerimg" src={require("./assets/img/5de5bcda00018dc018720764.jpg")} alt="" />
                    </a>
                </div>
                <div className="bannerLeftlist d-n">
                    {
                        Munudata.bannerLeftlistData.map((val, key)=>{
                            return(
                                <div className="bannerContent d-n" key={key}>
                                    {
                                        val[0].map((val,key)=>{
                                            return (
                                                <div className="samllTittle " key={key}>
                                                    <h1>{val[0]}</h1>
                                                    <ul>
                                                        {
                                                            val[1].map((val,key)=>{
                                                                return (
                                                                    <li key={key}><a href="">{val}</a></li>
                                                                );
                                                            })
                                                        }
                                                        <div className="clearfix"></div>
                                                    </ul>
                                                </div>
                                            );
                                        })
                                    }
                                    <div className="smallContent">
                                        {
                                            val[1].map((val,key)=>{
                                                return (
                                                    <div className="smallContentList" key={key}>
                                                        <img src={val[1]} alt="" className="smallImg"/>
                                                        <div className="scll">
                                                            <p>{val[2][0].substr(0,20)}...</p>
                                                            <div className="smallSpan">
                                                                <span><i className="fa fa-cny"></i>{val[2][1]}</span>
                                                                <span>{val[2][3]}</span>
                                                                <span><i className="fa fa-user-o"></i>{val[2][4]}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
export default MunuRight;