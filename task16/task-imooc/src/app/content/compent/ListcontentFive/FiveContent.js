import React from "react";
import img1 from "./assets/img/5de4e8a600011d0002940333.jpg"
import FiveContentData from "./links/data";

class ListContent extends React.Component{


    render() {
        return(
            <div className="ListContent">
                <div className="FiveContentList">
                    {
                        FiveContentData.map((val,key)=>{
                            return (
                                <div className="LiThree">
                                    <a href="">
                                        <div className="leftContent">
                                            <img src={val[0]}  alt="" />
                                            <span>试读</span>
                                        </div>
                                        <div className="rightContent">
                                            <h3>{val[1]}</h3>
                                            <div className="topList">
                                                <span className="one">{val[2][0]}</span>
                                                <span className="two">{val[2][1]}</span>
                                            </div>
                                            <div className="centerList">
                                                <span className="one">{val[3][0]}</span>
                                                <span className="two"> {val[3][1].substr(0,12)}...</span>
                                            </div>
                                            <div className="bottomList">
                                                <span className="one"><i className="fa fa-cny"></i>{val[4][0]}</span>
                                                    {val[4][1] && <span className="two">{val[4][1]}</span> && <span className="three">限时优惠</span>}
                                            </div>

                                        </div>
                                        <div className="clearfix"></div>
                                    </a>
                                </div>
                            );
                    })
                    }
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}
export default ListContent;