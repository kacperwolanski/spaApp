import React from "react";
import { Box, debounce, TextField } from "@mui/material";
import { useAppStore } from "../../store";
import { debounceTime } from "../../appConstants";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../../app/theme";
const FilterBar = () => {
  const { searchForId, setSearchForId } = useAppStore();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    mt: "20px",
    mb: "20px",
  };

  const inputStyle = {
    color: theme.colors.light,
    borderRadius: "10px",
    width: "70%",
    maxWidth: "600px",
    border: "1px solid",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
      "& ::placeholder": {
        color: "white",
      },
    },
    input: { color: "white" },
  };

  const debouncedSetSearchForId = debounce((value: string) => {
    setSearchForId(parseInt(value));
  }, debounceTime);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const numericValue = value.replace(/\D/g, "");
    debouncedSetSearchForId(numericValue);
  };

  return (
    <Box sx={containerStyle}>
      <TextField
        onChange={handleInputChange}
        value={searchForId ? searchForId : ""}
        sx={inputStyle}
        variant="outlined"
        placeholder="Search for Id"
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: theme.colors.light }} />,
        }}
      />
    </Box>
  );
};

export default FilterBar;
