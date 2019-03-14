import React from "react";
import { useInput, useTrueFalse } from "../../Hooks/input";
import { Link } from 'react-router-dom';


const SelectPaymentMethod = () => {
  const CardNumber = useInput('',16);
  const ExpireData = useInput('',4);
  const csv = useInput('',3);
  const useTrue = useTrueFalse();
  if (useTrue.value) {
    return (
      <div className="view-background select-pay-method">
        <section className="view select-pay-method">
          <h3 className="text-centered">Select a Payment Method</h3>
          <form>
            <button onClick={() => useTrue.setValue(false)}>Back</button>
            <input type="number" placeholder="Card Number" value={CardNumber.value} onChange={CardNumber.updateValue} />
            <input type="number" placeholder="Expire Date" value={ExpireData.value} onChange={ExpireData.updateValue} />
            <input type="number" placeholder="CSV" value={csv.value} onChange={csv.updateValue} />
            <Link to="/payment"><button>Add Method</button></Link>
          </form>
        </section>
      </div>
    );
  }
  return (
    <div className="view-background select-pay-method">
      <section className="view select-pay-method">
        <h3 className="text-centered">Select a Payment Method</h3>
        <div className="button-grid">
          {/* <Link to=""> */}
          <button onClick={() => useTrue.setValue(true)}>Card</button>
          {/* </Link> */}
          {/* <Link to=""> */}
          <button disabled={true}>PayPal</button>
          {/* </Link> */}
          {/* <Link to=""> */}
          <button disabled={true}>ApplePay</button>
          {/* </Link> */}
          {/* <Link to=""> */}
          <button disabled={true}>BTC</button>
          {/* </Link> */}
        </div>
      </section>
    </div>
  );
};

export default SelectPaymentMethod;
