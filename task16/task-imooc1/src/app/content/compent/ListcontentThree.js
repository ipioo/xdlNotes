import React from "react";
import ListHeader from "./common/ListHeader";
import ListContent from "./ListcontentThree/ThreeContent";
import ListHeaderData from "./common/links/data";


class ListcontentThree extends React.Component{


    render() {
        return(
            <div className="ListcontentThree">
                <ListHeader data = {ListHeaderData.ListcontentThree}/>
                <ListContent />
            </div>
        );
    }
}
export default ListcontentThree;