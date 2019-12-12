import React from "react";
import ListHeader from "./common/ListHeader";
import ZeroContent from "./ListcontentZero/ZeroContent";

class ListcontentZero extends React.Component{


    render() {
        return(
            <div className="ListcontentZero">
                <ListHeader />
                <ZeroContent />
            </div>
        );
    }
}
export default ListcontentZero;