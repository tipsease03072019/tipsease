import React from "react";
import Skeleton from "react-loading-skeleton";

export default () => {
  return (
    <>
      <button className="username-btn">
        <Skeleton />
      </button>
      <button className="username-btn">
        <Skeleton />
      </button>
      <button className="username-btn">
        <Skeleton />
      </button>
    </>
  );
};
