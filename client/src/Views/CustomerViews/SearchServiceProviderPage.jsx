import React, {Component} from "react";
import {Link} from "react-router-dom";
import {useInput} from "../../Hooks/input";

const SearchServiceProviderPage = props => {
  const sendTipTo = useInput(props.sendTipTo, 4);

  const clickHandler = () => {
    this.props.history.push("./select-payment-method");
  };

  return (
    <>
      <Link to="/">Back</Link>
      <h2>{props.selectedTip}</h2>
      <p>Type in the worker's 4-digit TipsEase ID</p>
      <input type="text" placeholder="####" value={sendTipTo.value} onChange={sendTipTo.updateValue} />
      <button onClick={clickHandler}>next</button>
    </>
  );
};

export default SearchServiceProviderPage;
