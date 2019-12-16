import React, { Component} from "react";
import Munudata from "./links/data";
class MunuRight extends Component{
    constructor(props) {
     super(props);
     this.state = {
         "Index" : 0,
         "LeftIndex":this.props.LeftIndex,
     };
     setInterval(this.RightClick,3000);
 }
    SpanClick = (key)=>{
        this.setState({"Index" : key,});
    };
    LeftClick = ()=>{
        let index = this.state.Index-1;
        if(index < 0 ){
            index = Munudata.MunuBannerImg.length-1;
        }
        this.setState(
            {"Index" : index,}
        );
    };
    RightClick = ()=>{
        let index = this.state.Index+1;
        if(index >= Munudata.MunuBannerImg.length ){
            index = 0;
        }
        this.setState(
            {"Index" : index,}
        );
    };
    // LeftMouseOver=()=>{
    //
    // };

    render() {
     let index = this.state.Index;
     let leftindex = this.state.LeftIndex;

        return (
            <div className="munuRight">
                <div className="bannerList">
                    <div className="click">
                        <span className="left" onClick={this.LeftClick}><i className="fa fa-angle-left fa-3x"></i></span>
                        <span className="right" onClick={this.RightClick}><i className="fa fa-angle-right fa-3x"></i></span>
                        <div className="clearfix"></div>
                    </div>
                    <div className="banner-anchor">
                        {
                            Munudata.MunuBannerImg.map((val,key)=>{
                                return (
                                    <span key={key} className={index === key ? "active" : "" } onClick={()=>{this.SpanClick(key)}}></span>
                                );
                            })
                        }
                    </div>
                    <a href={Munudata.MunuBannerImg[index][0]} className="banner">
                        <img className="bannerimg" src={Munudata.MunuBannerImg[index][1]} alt="" />
                    </a>
                </div>
                <div className={leftindex > -1 ? "bannerLeftlist" : "bannerLeftlist d-n"}>
                    {
                        Munudata.bannerLeftlistData.map((val, key)=>{
                            return(
                                <div className={leftindex === key ? "bannerContent" : "bannerContent d-n"} key={key}>
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
