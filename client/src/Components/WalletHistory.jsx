import React from "react";
import moment from 'moment'

export default ({senderImg, sender, time, amount,uid}) => {
  return (
    <div className="transaction-container" key={uid}>
      <div className="avatar">{senderImg}</div>
      <div className="left-container">
        <p className="transaction-person">{sender}</p>
        <p className="transaction-time small-text">
          Completed&nbsp;
          {moment(time).format("DD MMM")}
        </p>
      </div>
      <div className="right-container">
        <h4 className="transaction-amount">
          +${amount}
        </h4>
      </div>
    </div>
  );
};
