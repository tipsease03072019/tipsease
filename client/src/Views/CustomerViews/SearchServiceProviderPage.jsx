import React, {Component} from "react";
import {Link} from "react-router-dom";
import {useInput} from "../../Hooks/input";

const SearchServiceProviderPage = props => {
  const sendTipTo = useInput(props.sendTipTo, 4);

  return (
    <>
      <h2>{props.selectedTip}</h2>
      <p>Type in the worker's 4-digit TipsEase ID</p>
      <input type="text" placeholder="####" value={sendTipTo.value} onChange={sendTipTo.updateValue} />
      <Link to="/"><button>Back</button></Link>
      <Link to="/"><button>Next</button></Link>
    </>
  );
};

export default SearchServiceProviderPage;
