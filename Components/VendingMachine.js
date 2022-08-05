import React, {Component} from "react";
import ItemList from "./ItemList";
import Money from "./Money";
import Purchase from "./Purchase";
import "../Style/VendingMachine.css"

class VendingMachine extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedId:'',
            money:0.00
        }
        this.handleUpdateId=this.handleUpdateId.bind(this);
        this.handleUpdateMoney=this.handleUpdateMoney.bind(this);
    }


    handleUpdateId = (selectedId) => {
        this.setState((prevState,props)=>({
                selectedId : selectedId
            }));
    }

    handleUpdateMoney = (money)=> {
        this.setState({money: money},()=>{
            console.log("VM state money"+this.state.money)
        });
        console.log("VM variable money"+money)

    }



    render(){
        const {selectedId,money}=this.state
        return(
            <div className="VM">
                <div className = "itemList">
                    <ItemList sendId = {this.handleUpdateId.bind(this)} />
                </div>
                <div className="map">
                    <Money sendMoney = {this.handleUpdateMoney.bind(this)} deposite={money}/>
                    <Purchase id = {selectedId} money={money} sendMoney = {this.handleUpdateMoney.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default VendingMachine;