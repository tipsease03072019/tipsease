import React from 'react';

const ServiceProvider = () => {
    const clickHandler = () => {
        console.log('Going to Payment Details')
    }
    return (
        <div>
            <p>Select the Worker</p>
            <input type="text"/>
            <button onClick={() => clickHandler()}>next</button>
        </div>
    );
}

export default ServiceProvider;
