import React from "react";
import ListHeader from "./common/ListHeader";
import ListContent from "./ListcontentThree/ThreeContent";


class ListcontentThree extends React.Component{


    render() {
        return(
            <div className="ListcontentThree">
                <ListHeader />
                <ListContent />
            </div>
        );
    }
}
export default ListcontentThree;