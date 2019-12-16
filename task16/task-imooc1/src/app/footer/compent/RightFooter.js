import React from "react";

class RightFooter extends React.Component{


    render() {
        return(
            <div className="rightFooter">
                <div className="wechat" style={{"position": "relative"}}>
                    <div className="footerQrcode d-n"></div>
                    <i className="footer-wechat"></i>
                    <p>官方公众号</p>
                </div>
                <div className="weibo">
                    <a href="">
                        <i className="footer-weibo"></i>
                        <p>官方微博</p>
                    </a>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}
export default RightFooter;