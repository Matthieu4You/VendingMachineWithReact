import App from "../App";
import React, {Component, useState} from 'react';
import Item from "./Item";
import "../Style/ItemList.css"

const API="http://vending.us-east-1.elasticbeanstalk.com/items";


class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedId : null
        };
    }

    componentDidMount() {
       fetch(API)
           .then(response => response.json())
           .then(data => this.setState({
               items : data
           }))

        // this.props.onRef(this.state.selectedId);
    }


    handleClick=(id)=>{
        const {sendId} = this.props;
        this.setState((prevState,props)=>({
            selectedId : id
        }));
        sendId(id);
        console.log(id)
    }

    render() {
        const{ items } = this.state;
        return(
            <div className = "itemListContainer">
                {items.map(item=>(
                        <div className="itemListItem" onClick = {this.handleClick.bind(this,item.id)}>
                            <Item id={item.id} name={item.name} price={item.price} quantity = {item.quantity} />
                        </div>
                    )

                )}
            </div>
        );
    }


}

export default ItemList;