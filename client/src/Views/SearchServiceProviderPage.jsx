import React from 'react';

const SearchServiceProviderPage = () => {
    const clickHandler = () => {
        console.log('Going to Payment Details')
    }
    return (
        <>
            <p>Select the Worker</p>
            <input type="text"/>
            <button onClick={() => clickHandler()}>next</button>
        </>
    );
}

export default SearchServiceProviderPage;
