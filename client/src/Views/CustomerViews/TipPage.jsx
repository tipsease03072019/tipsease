import React from "react";
import PropTypes from "prop-types";
import { useInput } from "../../Hooks/input";
import Nav from '../../Components/Nav'

const TipPage = props => {
  // Creating new input hooks instance
  const tipAmount = useInput(props.tip, 4);

  const tipHandler = () => {
    props.setTipHelper(tipAmount.value);
    props.history.push("/find");
  };

return (
    <div className="tip view-background full-width">
      <section className="view tip">
        <h4>Select Amount</h4>
        <input
          type="number"
          value={tipAmount.value}
          onChange={tipAmount.updateValue}
          className="tip-input text-centered"
        />
      <button className="transparent next-btn" onClick={tipHandler}>Next</button>
        <div className="tip-shortcuts-container full-width">
          <button
            className="small"
            onClick={() => tipAmount.setValue(5)}
          >
            $5
          </button>
          <button
            className="small"
            onClick={() => tipAmount.setValue(10)}
          >
            $10
          </button>
          <button
            className="small"
            onClick={() => tipAmount.setValue(15)}
          >
            $15
          </button>
          <button
            className="small"
            onClick={() => tipAmount.setValue(20)}
          >
            $20
          </button>
        </div>
      </section>
    </div>
  );
};

TipPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  setTipHelper: PropTypes.func.isRequired,
};

export default TipPage;
