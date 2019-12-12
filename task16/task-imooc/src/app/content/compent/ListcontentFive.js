import React from "react";
import ListHeader from "./common/ListHeader";
import ListContent from "./ListcontentFive/FiveContent";
class ListcontentFive extends React.Component{


    render() {
        return(
            <div className="ListcontentFive">
                <ListHeader />
                <ListContent />
            </div>
        );
    }
}
export default ListcontentFive;