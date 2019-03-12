import React,{ Component } from "react";

class SearchServiceProviderPage extends Component {

  clickHandler = () => {
    this.props.history.push('./select-payment-method');
    
  };

  render() {
    return (
      <>
        <p>Type in the worker's 4-digit TipsEase ID</p>
        <input type="text" placeholder="####"/>
        <button onClick={this.clickHandler}>next</button>
      </>
    );
  }
}

export default SearchServiceProviderPage;
