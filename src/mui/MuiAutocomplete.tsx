import { Autocomplete, Box, TextField } from "@mui/material";
import { useState } from "react";
import { top100Films } from "../data";

type Movie = typeof top100Films[number];

function MuiAutocomplete() {
  const [value, setValue] = useState<Movie | string | null>(top100Films[0]);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <Box sx={{ width: "300px" }}>
      <Autocomplete
        options={top100Films}
        freeSolo
        value={value}
        onChange={(_, newValue) => {
          console.log({ newValue });

          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          console.log({ newInputValue });

          setInputValue(newInputValue);
        }}
        renderInput={(props) => <TextField {...props} />}
      />
    </Box>
  );
}

export default MuiAutocomplete;
