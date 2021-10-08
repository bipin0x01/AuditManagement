import React from "react";

const Spacer = ({t,b}) => {
  return <div style={{ margin: `${t} ${b}` }}></div>;
};

Spacer.defaultProps={
    t:"20px",
    b:"20px"
}
export default Spacer;
