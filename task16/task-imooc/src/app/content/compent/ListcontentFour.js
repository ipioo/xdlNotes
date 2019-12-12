import React from "react";
import ListHeader from "./common/ListHeader";
import ListContent from "./ListcontentFour/FourContent";
class ListcontentFour extends React.Component{


    render() {
        return(
            <div className="ListcontentFour">
                <ListHeader />
                <ListContent />
            </div>
        );
    }
}
export default ListcontentFour;