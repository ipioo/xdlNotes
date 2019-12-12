import React from "react";
import ListHeader from "./common/ListHeader";
import ListContent from "./ListcontentTwo/TwoContent";



class ListcontentTwo extends React.Component{


    render() {
        return(
            <div className="ListcontentTwo">
                <ListHeader />
                <ListContent />
            </div>
        );
    }
}
export default ListcontentTwo;