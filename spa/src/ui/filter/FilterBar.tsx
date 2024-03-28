import { Box } from "@mui/material";
import React from "react";
import { useAppStore } from "../../store";

const FilterBar = () => {
  const { searchForId, setSearchForId } = useAppStore();
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    mt: "20px",
  };
  const inputStyle = {
    borderRadius: "20px",
    width: "20%",
    height: "30px",
    outline: "none",
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchForId(parseInt(event.target.value));
  };
  return (
    <Box sx={containerStyle}>
      <input
        title="Enter a number for id"
        style={{ ...inputStyle, textAlign: "center" }}
        onChange={handleInputChange}
        placeholder="search for id..."
        value={searchForId ? searchForId : ""}
      />
    </Box>
  );
};

export default FilterBar;
