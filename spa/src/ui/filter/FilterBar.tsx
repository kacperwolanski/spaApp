import React from "react";
import { Box, debounce } from "@mui/material";
import { useAppStore } from "../../store";
import { debounceTime } from "../../appConstants";

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

  const debouncedSetSearchForId = debounce((value: string) => {
    setSearchForId(parseInt(value));
  }, debounceTime);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    debouncedSetSearchForId(value);
  };

  return (
    <Box sx={containerStyle}>
      <input
        title="Enter a number for id"
        style={{ ...inputStyle, textAlign: "center" }}
        onChange={handleInputChange}
        placeholder="search for id..."
        value={searchForId || ""}
      />
    </Box>
  );
};

export default FilterBar;
