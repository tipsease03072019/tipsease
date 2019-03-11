import React from 'react';

const PaymentDetails = () => {
    const clickHandler = () => {
        console.log('Payment method added, moving on to `payment success`!');
    }
    return (
        <div>
            <p>Enter Your Details... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lig </p>
            <form>
                <input type="text" />
                <input type="text" />
                <button onClick={()=>clickHandler()}></button>
            </form>
        </div>
    );
}

export default PaymentDetails;
