import React from "react";
import PropTypes from "prop-types";
import { useInput } from '../../Hooks/input'

const TipPage = props => {
  // Creating new input hooks instance
  const tipAmount = useInput(props.tip, 4);

  const tipHandler = () => {
    props.setTipHelper(tipAmount.value);
    props.history.push("./find");
  };

  return (
    <>
      <h2>Select Amount</h2>
      <input
        type="number"
        value={tipAmount.value}
        onChange={tipAmount.updateValue}
      />
      <button onClick={tipHandler}>Next</button>
      <br />
      <button onClick={() => tipAmount.setValue(5)}>5</button>
      <button onClick={() => tipAmount.setValue(10)}>10</button>
      <button onClick={() => tipAmount.setValue(15)}>15</button>
      <button onClick={() => tipAmount.setValue(20)}>20</button>
    </>
  );
};

TipPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  tip: PropTypes.number.isRequired,
  setTipHelper: PropTypes.func.isRequired,
};

export default TipPage;
