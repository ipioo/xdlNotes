import React from "react";
class ListHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        };
    }

    render() {
        let {data} = this.props;
        return(
            <div className="ListHeader">
                <h3>
                    {
                        data && data.title.map((val,key)=>{
                            return(
                                <span key={key} className={key === 0 ? '' : 'intro'}>{val}</span>
                                );
                        })
                    }
                    {data && data.status && <p><a href="">查看更多<i className="fa fa-angle-right"></i></a></p>}
                </h3>
            </div>
        );
    }
}
export default ListHeader;