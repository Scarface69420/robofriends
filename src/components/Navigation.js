import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("signout")}
        className='f3 link dim black underline pa3 pointer'
      >
        Add Name
      </p>
    </nav>
  );
};

export default Navigation;
