import { Typography } from "@mui/material";
import React from "react";
import { theme } from "./theme";

interface Props {
  errorMessage: string;
}
const ErrorMessage = ({ errorMessage }: Props) => {
  const style = {
    mt: "50px",
    color: theme.colors.errorRed,
    fontSize: "20px",
    border: "1px solid",
    borderRadius: "10px",
  };
  return (
    <>{errorMessage && <Typography sx={style}>{errorMessage}</Typography>}</>
  );
};

export default ErrorMessage;
