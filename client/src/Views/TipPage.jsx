import React from 'react';

const TipPage = () => {
    const tipHandler = () => {
        console.log('amount selected, on to searching for provider')
    }
    const selectTipHandler = () => {
        console.log('this.setState({tipAmount: amount})')
    }
    return (
        <div>
            <h2>Select Amount</h2>
            <input type="number" />
            <button onClick={() => tipHandler()}>Next</button>
            <button onClick={() => selectTipHandler()}>5</button>
            <button onClick={() => selectTipHandler()}>10</button>
            <button onClick={() => selectTipHandler()}>15</button>
            <button onClick={() => selectTipHandler()}>20</button>
        </div>
    );
}

export default TipPage;
