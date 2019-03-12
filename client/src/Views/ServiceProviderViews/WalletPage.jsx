import React,{ Component } from "react";
import PropTypes from 'prop-types';

class WalletPage extends Component {
  constructor(props) {
    super(props);

    this.state = {

      
    }
  }

  tipHandler = () => {
    console.log("Taking you to the TipPage")
  }

  showCodeHandler = () => {
    console.log("Taking you to the code! ('/employee_code')")
  }

  
  render() {
    // Empty Array, signifying previous transactions. To be used to `map()` below.
    const transactions = [{
      receivedOrSent: "received", amount: 69, sender: "Isaac Aszimov", timeStamp: "2019-03-12 01:06:39"
    }];
    console.log(this.props)
    return (
      <>
        {/* Upper Half, containing balance */}
        <div className="wallet-top">
          <p>Your Current TipTease Balance is:</p>
          <div className="balance-container">
            {this.props.user.balance}
          </div>

          <button onClick={this.tipHandler}>Tip Someone</button>
        </div>

        {/* Lower Half, containing latest transactions and an absolute-positioned button to show the code */}
        <div className="wallet-bottom">
          <p>Latest Transactions:</p>
          {transactions.map((transaction, idx) => 
          <div key={idx}>
            <p className="transaction">{transaction.receivedOrSent} ${transaction.amount} from {transaction.sender}</p>
            <p className="transaction-timestamp">At {transaction.timeStamp}</p>
          </div>
          )}

          {/* Button positioned absolutely */}
          <button onClick={this.showCodeHandler}>Show Your Code</button>
        </div>
      </>
    );
  }
}

WalletPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default WalletPage;
