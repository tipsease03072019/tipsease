import React,{ Component } from "react";

class TipPage extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      tipAmount: 5,
    }
  }
  tipHandler = () => {
    console.log("amount selected, on to searching for provider");
  };
  changeHandler = (event) => {
    this.setState({tipAmount: event.target.value})
  }
  selectTipHandler = (amount) => {
    this.setState({tipAmount: amount});
  };
  render() {
    console.log(this.state)
    return (
      <>
        <h2>Select Amount</h2>
        <input type="number" 
          value={this.state.tipAmount}
          onChange={this.changeHandler}/>
        <button onClick={this.tipHandler}>Next</button><br/>
        <button onClick={() => this.selectTipHandler(5)}>5</button>
        <button onClick={() => this.selectTipHandler(10)}>10</button>
        <button onClick={() => this.selectTipHandler(15)}>15</button>
        <button onClick={() => this.selectTipHandler(20)}>20</button>
      </>
    );
  }
}


export default TipPage;
