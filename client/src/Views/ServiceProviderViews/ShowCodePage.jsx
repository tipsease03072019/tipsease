import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowCodePage extends Component {
  onClose = () => {
    this.props.history.push("/wallet")
  }
  render () {
    return (
      <>
        {/* Button to 'close' the code and go back to the Wallet */}
        <button className="closeButton" onClick={this.onClose}>X</button>

        {/* Description / How To Use  */}
        <p>Using this code, you customers can tip you directly! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, libero!</p>

        {/* Holder containing the 4-digit code which the service worker can hand out and receive tips from */}
        <div className="code-container">
          {this.props.code.split("").map((char,idx) => 
            <div className="code-character-container" key={idx}>
              <h3 className="code-character">{char}</h3>
            </div>
          )}
        </div>
      </>
    );
  }
}

ShowCodePage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default ShowCodePage;
