import React from "react";
import { theme } from "../../../app/theme";

const MyLogo = () => {
  const containerStyle = {
    border: "1px solid",
    borderRadius: "50%",
    height: "40px",
    width: "40px",
    background: theme.colors.darkGrey,
  };
  return <div style={containerStyle}></div>;
};

export default MyLogo;
