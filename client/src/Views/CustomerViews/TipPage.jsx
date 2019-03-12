import React,{ Component } from "react";
import PropTypes from 'prop-types';

class TipPage extends Component {
  state = {
    tipAmount: 5
  };

  // Fires when someone clicks 'Next'
  tipHandler = () => {
    this.props.setTip(this.state.tipAmount);
    this.props.history.push("./find");
  };

  // Fires when someone types in the input
  changeHandler = event => {
    this.setState({ tipAmount: event.target.value });
  };

  // Fires when someone selects one of the buttons.
  selectTipHandler = amount => {
    this.setState({ tipAmount: amount });
  };

  render() {
    return (
      <>
        <h2>Select Amount</h2>
        <input
          type="number"
          value={this.state.tipAmount}
          onChange={this.changeHandler}
        />
        <button onClick={this.tipHandler}>Next</button>
        <br />
        <button onClick={() => this.selectTipHandler(5)}>5</button>
        <button onClick={() => this.selectTipHandler(10)}>10</button>
        <button onClick={() => this.selectTipHandler(15)}>15</button>
        <button onClick={() => this.selectTipHandler(20)}>20</button>
      </>
    );
  }
}

TipPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  tip: PropTypes.number.isRequired,
  setTip: PropTypes.func.isRequired,
}


export default TipPage;
