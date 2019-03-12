import React,{ Component } from "react";
import PropTypes from 'prop-types';
import * as moment from 'moment';

class WalletPage extends Component {
  constructor(props) {
    super(props);

    this.state = {

      
    }
  }

  tipHandler = () => {
    console.log("Taking you to the TipPage")
    this.props.history.push("/tip")
  }

  showCodeHandler = () => {
    console.log("Taking you to the code! ('/employee_code')")
    this.props.history.push("wallet/employee_code")
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
        <section className="wallet-top">
          <p>Your Current TipTease Balance is:</p>
          <div className="balance-container">
            {this.props.user.balance}
          </div>

          <button onClick={this.tipHandler}>Tip Someone</button>
        </section>

        {/* Lower Half, containing latest transactions and an absolute-positioned button to show the code */}
        <section className="wallet-bottom">
          <p>Latest Transactions:</p>
          {transactions.map((transaction, idx) => 
          <div key={idx}>
            <p className="transaction">{transaction.receivedOrSent} ${transaction.amount} from {transaction.sender}</p>
            <p className="transaction-timestamp">- {moment().subtract(4912, 'minutes').calendar()}</p>
          </div>
          )}

          {/* Button positioned absolutely */}
          <button onClick={this.showCodeHandler}>Show Your Code</button>
        </section>
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
