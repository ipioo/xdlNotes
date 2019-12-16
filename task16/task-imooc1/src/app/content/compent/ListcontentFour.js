import React from "react";
import ListHeader from "./common/ListHeader";
import ListContent from "./ListcontentFour/FourContent";
import ListHeaderData from "./common/links/data";
class ListcontentFour extends React.Component{


    render() {
        return(
            <div className="ListcontentFour">
                <ListHeader data = {ListHeaderData.ListcontentFour}/>
                <ListContent />
            </div>
        );
    }
}
export default ListcontentFour;