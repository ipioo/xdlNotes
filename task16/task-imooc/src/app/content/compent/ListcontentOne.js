import React from "react";
import ListHeader from "./common/ListHeader";
import OneContent from "./ListcontentOne/OneContent";
import ListHeaderData from "./common/links/data";
class ListcontentOne extends React.Component{


    render() {
        return(
            <div className="ListcontentOne">
                <ListHeader data = {ListHeaderData.ListcontentOne} />
                <OneContent />
            </div>
        );
    }
}
export default ListcontentOne;