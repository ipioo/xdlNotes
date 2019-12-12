import React, { Component} from "react";

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
                    <div className="bannerContent d-n">
                        <div className="samllTittle ">
                            <h1>前沿技术</h1>
                            <ul>
                                <li><a href="">微服务</a></li>
                                <li><a href="">区块链</a></li>
                                <li><a href="">以太坊</a></li>
                                <li><a href="">机器学习</a></li>
                                <li><a href="">深度学习</a></li>
                                <li><a href="">计算机视觉</a></li>
                                <li><a href="">自然语言处理</a></li>
                                <li><a href="">数据分析&挖掘</a></li>
                                <div className="clearfix"></div>
                            </ul>
                        </div>
                        <div className="smallContent">
                            <div className="smallContentList">
                                <img src={require("./assets/img/5af2a67500016b9905400300_360_202.jpg")} alt="" className="smallImg"/>
                                    <div className="scll">
                                        <p>区块链入门与去中心化应用实战</p>
                                        <div className="smallSpan">
                                            <span><i className="fa fa-cny"></i>568</span>
                                            <span>3步 / 28课</span>
                                            <span><i className="fa fa-user-o"></i>550</span>
                                        </div>
                                    </div>

                            </div>
                            <div className="smallContentList">
                                <img src={require("./assets/img/5af2a67500016b9905400300_360_202.jpg")} alt="" className="smallImg"/>
                                    <div className="scll">
                                        <p>区块链入门与去中心化应用实战</p>
                                        <div className="smallSpan">
                                            <span><i className="fa fa-cny"></i>568</span>
                                            <span>3步 / 28课</span>
                                            <span><i className="fa fa-user-o"></i>550</span>
                                        </div>
                                    </div>

                            </div>
                            <div className="smallContentList">
                                <img src={require("./assets/img/5af2a67500016b9905400300_360_202.jpg")} alt="" className="smallImg"/>
                                    <div className="scll">
                                        <p>区块链入门与去中心化应用实战</p>
                                        <div className="smallSpan">
                                            <span><i className="fa fa-cny"></i>568</span>
                                            <span>3步 / 28课</span>
                                            <span><i className="fa fa-user-o"></i>550</span>
                                        </div>
                                    </div>

                            </div>
                            <div className="smallContentList">
                                <img src={require("./assets/img/5af2a67500016b9905400300_360_202.jpg")} alt="" className="smallImg" />
                                    <div className="scll">
                                        <p>区块链入门与去中心化应用实战</p>
                                        <div className="smallSpan">
                                            <span><i className="fa fa-cny"></i>568</span>
                                            <span>3步 / 28课</span>
                                            <span><i className="fa fa-user-o"></i>550</span>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MunuRight;