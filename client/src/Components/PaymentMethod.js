import React from 'react';

const PaymentMethod = () => {
    const onClickHandler = e => {
        console.log('Payment Method Button Clicked!')
    }
    
    return (
        <div>
            <p>Select Your Payment Method Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus </p>
            <div>
                <button onClick={()=>this.onClickHandler()}>Apple Pay</button>
                <button onClick={()=>this.onClickHandler()}>Visa / MC</button>
                <button onClick={()=>this.onClickHandler()}>BTC</button>
                <button onClick={()=>this.onClickHandler()}>PayPal</button>
            </div>
        </div>
    );
}

export default PaymentMethod;
