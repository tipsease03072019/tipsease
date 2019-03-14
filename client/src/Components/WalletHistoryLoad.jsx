import React from "react";
import Skeleton from "react-loading-skeleton";

export default () => {
  return (
    <>
      <div className="transaction-container">
        <div className="avatar">
          <Skeleton circle={true} width={56} height={56} />
        </div>
        <div className="left-container">
          <p className="transaction-person">
            <Skeleton height={30} />
          </p>
          <p className="transaction-time small-text">
            <Skeleton />
          </p>
        </div>
      </div>
      <div className="transaction-container">
        <div className="avatar">
          <Skeleton circle={true} width={56} height={56} />
        </div>
        <div className="left-container">
          <p className="transaction-person">
            <Skeleton height={30} />
          </p>
          <p className="transaction-time small-text">
            <Skeleton />
          </p>
        </div>
      </div>
      <div className="transaction-container">
        <div className="avatar">
          <Skeleton circle={true} width={56} height={56} />
        </div>
        <div className="left-container">
          <p className="transaction-person">
            <Skeleton height={30} />
          </p>
          <p className="transaction-time small-text">
            <Skeleton />
          </p>
        </div>
      </div>
      <div className="transaction-container">
        <div className="avatar">
          <Skeleton circle={true} width={56} height={56} />
        </div>
        <div className="left-container">
          <p className="transaction-person">
            <Skeleton height={30} />
          </p>
          <p className="transaction-time small-text">
            <Skeleton />
          </p>
        </div>
      </div>
      <div className="transaction-container">
        <div className="avatar">
          <Skeleton circle={true} width={56} height={56} />
        </div>
        <div className="left-container">
          <p className="transaction-person">
            <Skeleton height={30} />
          </p>
          <p className="transaction-time small-text">
            <Skeleton />
          </p>
        </div>
      </div>
    </>
  );
};
