import {Component} from "react";
import Item from "./Item";
import "../Style/Money.css";


class Money extends Component {

    constructor(props) {
        super(props);
        this.state = {
            money : 0.00
        }
    }

    static getDerivedStateFromProps = (props,state)=>{
        console.log("hook props===="+props.deposite )
        console.log("hook state===="+state.money  )
        if(props.deposite===0&&state.money!==0.00){
            console.log("succeed!")
            return{
                money: 0.00
            }
        }

        // const {deposite} = this.props;
        // console.log("Money Component deposite:" +deposite)
        // if (deposite===0) {
        //     this.setState({money:deposite},()=>{
        //         console.log("Money Component deposite2:" +this.state.money)
        //     })
        // }

    }

    changeMoney = (res)=>{
        const temp = eval(this.state.money+"+"+res);
        this.setState({money: temp},()=>{
                console.log("Money Component money:" +this.state.money)
            }
        );
        const {sendMoney} = this.props;
        sendMoney(temp);

    }


    render() {
        const {money}=this.state
        return (
            <div>
                <div title>
                    <h2>Total $ In</h2>
                </div>
                <div className="balance">
                    <h1>{money.toFixed(2)}</h1>
                </div>
                <div className="buttons">
                    <button onClick={this.changeMoney.bind(this,1.00)}>Add Dollar</button>
                    <button onClick={this.changeMoney.bind(this,0.25)}>Add Quater</button>
                    <button onClick={this.changeMoney.bind(this,0.10)}>Add Dime</button>
                    <button onClick={this.changeMoney.bind(this,0.05)}>Add Nickle</button>
                </div>
                <hr/>
            </div>
        );
    }


}

export default Money;