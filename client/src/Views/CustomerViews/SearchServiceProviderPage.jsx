import React from "react";
import { Link } from "react-router-dom";
import { useInput } from "../../Hooks/input";

const SearchServiceProviderPage = props => {
  const sendTipTo = useInput(props.sendTipTo, 4);

  return (
    <div className="search-provider view-background full-width">
      <section className="view search-provider">
        <div className="balance-container">
          <span>$</span>
          <h2>{props.selectedTip}</h2>
        </div>
        <h4>Enter a service provider's TipsEase ID</h4>
        <input
          type="text"
          placeholder="⨉⨉⨉⨉⨉⨉⨉"
          value={sendTipTo.value}
          onChange={sendTipTo.updateValue}
          className="text-centered"
        />
      <div className="">
          <Link to="/">
            <button className="transparent">Prev</button>
          </Link>
          <Link to="/">
            <button className="transparent next-btn">Next</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SearchServiceProviderPage;
