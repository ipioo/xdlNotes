import React from "react";
import ListHeader from "./common/ListHeader";
import ListContent from "./ListcontentFive/FiveContent";
import ListHeaderData from "./common/links/data";
class ListcontentFive extends React.Component{


    render() {
        return(
            <div className="ListcontentFive">
                <ListHeader data = {ListHeaderData.ListcontentFive}/>
                <ListContent />
            </div>
        );
    }
}
export default ListcontentFive;