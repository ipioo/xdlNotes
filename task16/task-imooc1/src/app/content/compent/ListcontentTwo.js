import React from "react";
import ListHeader from "./common/ListHeader";
import ListContent from "./ListcontentTwo/TwoContent";
import ListHeaderData from "./common/links/data";



class ListcontentTwo extends React.Component{


    render() {
        return(
            <div className="ListcontentTwo">
                <ListHeader data = {ListHeaderData.ListcontentTwo}/>
                <ListContent />
            </div>
        );
    }
}
export default ListcontentTwo;