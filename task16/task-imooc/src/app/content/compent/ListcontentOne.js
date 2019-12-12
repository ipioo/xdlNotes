import React from "react";
import ListHeader from "./common/ListHeader";
import OneContent from "./ListcontentOne/OneContent";
class ListcontentOne extends React.Component{


    render() {
        return(
            <div className="ListcontentOne">
                <ListHeader />
                <OneContent />
            </div>
        );
    }
}
export default ListcontentOne;