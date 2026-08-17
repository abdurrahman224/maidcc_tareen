import React from "react";

const Container = ({ children, className = "max-w-7xl" }) => {
  return (
    <div className={`${className} mx-auto  w-full`}>
      {children}
    </div>
  );
};

export default Container;
