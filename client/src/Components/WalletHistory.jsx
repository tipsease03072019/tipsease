import React from "react";
import moment from 'moment'
import Skeleton from "react-loading-skeleton";

export default (props) => {
  console.log(props)
  return (
    <div className="transaction-container" key={props.uid}>
      <div className="avatar"><Skeleton circle={true} width={56} height={56} /></div>
      <div className="left-container">
        <p className="transaction-person"><Skeleton height={30} /></p>
        <p className="transaction-time small-text">
          Completed&nbsp;
          {props.data}
          {moment(props.data).format("hh:mm Do MMM")}
        </p>
      </div>
      <div className="right-container">
        <h4 className="transaction-amount">
          +${props.tip}
        </h4>
      </div>
    </div>
  );
};
