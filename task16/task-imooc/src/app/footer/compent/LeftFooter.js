import React from "react";
import img1 from "../assets/img/a9.png"
class LeftFooter extends React.Component{


    render() {
        return(
            <div className="leftFooter">
                <div className="leftFooterTop">
                    <ul className="footerNavbar">
                        <li>企业合作</li>
                        <li>人才招聘</li>
                        <li>联系我们</li>
                        <li>讲师招募</li>
                        <li>帮助中心</li>
                        <li>一件反馈</li>
                        <li>慕课大学</li>
                        <li>代码托管</li>
                        <li>友情链接</li>
                    </ul>
                    <p>
                        <span><img draggable="false" className="moco-emoji" alt="©" src={img1} /> 2019 imooc.com  京ICP备 12003892号-11 </span>
                        <span><i className="fa-beian"></i>京公网安备11010802030151号</span>
                        <span> 北京奥鹏文化传媒有限公司</span>
                        <a href=""> 营业执照</a>
                    </p>
                </div>
                <div className="leftFooterBottom"></div>
            </div>
        );
    }
}
export default LeftFooter;