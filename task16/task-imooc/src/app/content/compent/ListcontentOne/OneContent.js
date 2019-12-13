import React from "react";
import OneContentDataImg from "./links/data";


class OneContent extends React.Component{

    render() {
        return(
            <div className="OneContent">
                <div className="OneContentList">
                    <div className="LiThree " style={{"backgroundImage": "url("+OneContentDataImg[0]+")"}}><a href="" className="ZeroListOne">
                    </a></div>
                    <div className="LiThree" style={{"backgroundImage": "url("+OneContentDataImg[1]+")"}}><a href="" className="ZeroListTwo">
                    </a></div>
                    <div className="LiThree" style={{"backgroundImage": "url("+OneContentDataImg[2]+")"}}><a href="" className="ZeroListThree">
                    </a></div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}
export default OneContent;