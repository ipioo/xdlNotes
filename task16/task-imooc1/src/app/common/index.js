// @flow
import * as React from 'react';

class CommonCard extends React.Component {
    render() {
        return (
            <div>
                <div className="down d-n">
                    <h3>慕课网APP - 随时随地学编程</h3>
                    <div className="downBootom">
                        <img src={require("./assets/img/appload.png")} alt="" />
                            <div className="downApp">
                                <a className="App"><i className="fa fa-apple fa-2x"></i>App Store下载</a>
                                <a className="App"><i className="fa fa-android fa-2x"></i>Android下载</a>
                                <p>扫描下载慕课网APP</p>
                            </div>
                            <div className="clearfix"></div>
                    </div>
                </div>
                <div className="cart d-n">
                    <div className="cartTop">
                        <h3>我的购物车</h3>
                        <span>已加入0门课程</span>
                    </div>
                    <ul className="cartCenter ul">
                        <li><i className="fa fa-cart-plus fa-5x"></i></li>
                        <li>购物车里空空如也</li>
                        <li>快去这里选购你中意的课程</li>
                        <li><a href="">实战课程</a></li>
                        <li><a href="">就业班</a></li>
                    </ul>
                    <div className="cartBottom">
                        <a className="cartOrderCenter" href="">我的订单中心</a>
                        <a className="goShopping" href="">去购物车</a>
                    </div>
                </div>
                <div className="rightList">
                    <div className="rightQrcode d-n">
                        <div id="qrcode" className="qrcode">
                        </div>
                    </div>
                    <ul>
                        <li className="one"><i className="fa fa-info-circle fa-2x"></i></li>
                        <li><i className="fa fa-question fa-2x"></i></li>
                        <li><i className="fa fa-mobile fa-2x"></i></li>
                        <li><i className="fa fa-wechat fa-2x"></i></li>
                        <li className="d-n" id="black"><i className="fa fa-angle-up fa-2x"></i></li>
                    </ul>
                </div>
                <a className="bottom-AD" href="http://www.coozhi.com/youxishuma/g4/2253.html">
                    <i className="fa fa-anchor fa-2x fa-anchor-click"></i>
                </a>
            </div>
        );
    };
};

export default CommonCard;