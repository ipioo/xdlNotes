import React from "react";
import ListHeader from "./common/ListHeader";
import ZeroContent from "./ListcontentZero/ZeroContent";
import ListHeaderData from "./common/links/data";
class ListcontentZero extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        // console.log(ListHeaderData.ListcontentZero);
        return(
            <div className="ListcontentZero">
                <ListHeader data = {ListHeaderData.ListcontentZero}/>
                <ZeroContent />
            </div>
        );
    }
}
export default ListcontentZero;