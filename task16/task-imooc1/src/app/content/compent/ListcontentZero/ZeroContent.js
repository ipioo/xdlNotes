import React from "react";
import ZeroContentData from "./links/data";
class ZeroContent extends React.Component{


    render() {
        return(
            <div className="ZeroContent">
                <div className="ZeroContentList">
                    <div className="LiFive LiFiveStart"><a href="">
                        <i className="html5"></i>
                        <p>Web前端攻城狮</p>
                        <p className="p">从未接触编程也可以学好</p>
                    </a></div>
                    <div className="LiFive "><a href="">
                        <i className="java"></i>
                        <p>Java攻城狮</p>
                        <p className="p">综合就业排名第一</p>
                    </a></div>
                    <div className="LiFive"><a href="">
                        <i className="python"></i>
                        <p>Python攻城狮</p>
                        <p className="p">综合就业排名第一</p>
                    </a></div>
                    <div className="LiFive "><a href="">
                        <i className="android"></i>
                        <p>Android攻城狮</p>
                        <p className="p">移动市场份额第一</p>
                    </a></div>
                    <div className="LiFive LiFiveEnd"><a href="">
                        <i className="php"></i>
                        <p>Php攻城狮</p>
                        <p className="p">Web开发首选语言</p>
                    </a></div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}
export default ZeroContent;