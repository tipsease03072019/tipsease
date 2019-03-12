import React,{ Component } from 'react';

class SelectPaymentMethodPage extends Component {
  render() {
    return (
    <>
      <p>Select Your Payment Method Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus </p>
      <div>
        <button onClick={()=>this.onClickHandler()}>Apple Pay</button>
        <button onClick={()=>this.onClickHandler()}>Visa / MC</button>
        <button onClick={()=>this.onClickHandler()}>BTC</button>
        <button onClick={()=>this.onClickHandler()}>PayPal</button>
      </div>
    </>
    );
  }
}

export default SelectPaymentMethodPage;
