import App from "../App";
import React from 'react';
import "../Style/Item.css"


class Item extends React.Component {

    constructor(props) {
        super(props);
    }


    render(){
        var {id,name,price,quantity} = this.props;
        return(
            <div className = 'itemContainer'>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>price:{price}</div>
                <div>quality:{quantity}</div>
            </div>
        );
    }
}

export default Item;