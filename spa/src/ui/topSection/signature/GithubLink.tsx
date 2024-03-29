import React from "react";
import { theme } from "../../../app/theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";
const GithubLink = () => {
  const styles = {
    fontSize: "35px",
    color: theme.colors.light,
  };
  return (
    <Link
      href={"https://github.com/kacperwolanski/spaApp"}
      sx={{ textDecoration: "none" }}
    >
      <GitHubIcon sx={styles} />
    </Link>
  );
};

export default GithubLink;
