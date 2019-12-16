import React from "react";
import TwoContentData from "./links/data";
class ListContent extends React.Component{
    render() {
        return(
            <div className="ListContent">
                <div className="TwoContentList">
                    {
                        TwoContentData.map((val, key)=>{
                            return (
                                <div className="LiFour" key={key}><a href="">
                                    <div className="topContent">
                                        <img src={val[0]} alt="" />
                                        <span></span><span></span>
                                    </div>
                                    <div className="bottomContent">
                                        <h3>{val[1].substr(0,15)}...</h3>
                                        <div className="centerList">
                                            <span className="one">{val[2][0]}</span>
                                            <span className="two"><i className="fa fa-user-o"></i>{val[2][1]}</span>
                                            <span className="three">{val[2][2]}</span>
                                        </div>
                                        <div className="bottomList">
                                            <span className="one"><i className="fa fa-cny"></i>{val[3][0]}</span>
                                            <span className="two">{val[3][1]}</span>
                                        </div>
                                    </div>
                                </a></div>
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