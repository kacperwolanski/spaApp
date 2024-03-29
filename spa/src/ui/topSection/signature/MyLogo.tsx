import React from "react";
import { theme } from "../../../app/theme";

const MyLogo = () => {
  const containerStyle = {
    color: theme.colors.light,
    fontSize: "20px",
    fontWeight: "200",
    letterSpacing: "5px",
  };
  return <div style={containerStyle}>colorize</div>;
};

export default MyLogo;
