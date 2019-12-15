import React from "react";
import ThreeContentData from "./links/data";
class ListContent extends React.Component{


    render() {
        return(
            <div className="ListContent">
                {
                    ThreeContentData.map((val,key)=>{
                        return (
                            <div className="ThreeContentList" key={key}>
                                {
                                    val.map((val,key)=>{
                                        return (
                                            <div className="LiTwo" key={key}>
                                                <a href="/">
                                                    <div className="leftContent">
                                                        <img src={val[0]} alt="" />
                                                    </div>
                                                    <div className="rightContent">
                                                        <h3>{val[1].substr(0,25)}...</h3>
                                                        <p>{val[2].substr(0,25)}...</p>
                                                        <div className="centerList">
                                                            <span className="one">{val[3][0]}</span>
                                                            <span className="two">{val[3][1]}</span>
                                                            <span className="three"><i className="fa fa-thumbs-up"></i>{val[3][2]}</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        );
                                })
                                }
                                <div className="clearfix"></div>
                            </div>
                        );
                    })
                }

            </div>
        );
    }
}
export default ListContent;
