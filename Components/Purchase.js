import {Component} from "react";
import "../Style/Purchase.css";

const API = "http://vending.us-east-1.elasticbeanstalk.com/money/";
const CONNECTION = "/item/";

class Purchase extends Component{

    constructor(props) {
        super(props);

        this.state={
            message: '',
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
    }

    handleClick = () => {
        var {id,money} = this.props;
        fetch(API+(Math.floor(money*100)/100)+CONNECTION+id,{
            method : "POST",
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                parameterOne: 'message',
                parameterTwo: 'quarters',
                parameterThree: 'dimes',
                parameterFour: 'nickels',
                parameterFive:'pennies'
            })
        })
            .then(response => response.json())
            .then(data => this.setState({
                message: data.message===undefined?"Thank you!!":data.message,
                quarters: data.quarters===undefined?0:data.quarters,
                dimes: data.dimes===undefined?0:data.dimes,
                nickels: data.nickels===undefined?0:data.nickels,
                pennies: data.pennies===undefined?0:data.pennies
            }))


    }

    handleChanges = ()=>{
        if(this.state.message === "Thank you!!"){
            const {sendMoney} = this.props;
            sendMoney(0.00);
            this.setState({
                message:'',
                quarters: 0,
                dimes: 0,
                nickels: 0,
                pennies: 0
            },()=>{
                console.log("purchase==>"+this.state.message);
            })
        }
    }

    render() {
        var {id,money} = this.props;
        var {message,quarters,dimes,nickels,pennies} = this.state

        return(
            <div>
                <div className="messages">
                    <h2>Messages</h2>
                    <div className="messages-content">{message}</div>
                    <div className="messages-item">
                        <h2>Item:   {id}</h2>
                        <button onClick={this.handleClick.bind(this)}>Make Purchase</button>
                        <button onClick={this.handleChanges.bind(this)}>Clear Changes</button>
                    </div>

                </div>
                <hr/>
                <div className="change">
                    <h2>Change</h2>
                    <div className="change-content">
                        <h3>{quarters<=1?'Quarter: ':'Quarters: '}{quarters}</h3>
                        <h3>{dimes<=1?'Dime: ':'Dimes: '}{dimes}</h3>
                        <h3>{nickels<=1?'Nickel: ':'Nickels: '}{nickels}</h3>
                        <h3>{pennies<=1?'Penny: ':'Pennies: '}{pennies}</h3>
                    </div>
                </div>

            </div>
        )
    }
}

export default Purchase;