import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

function MuiSelect() {
  const [age, setAge] = useState(10);
  return (
    <div>
      <FormControl sx={{ width: "300px" }} error size="small">
        <Select
          variant="outlined"
          value={age}
          onChange={(e) => {
            console.log({ newVal: e.target.value });

            setAge(+e.target.value);
          }}
        >
          <MenuItem value={10}> 10 </MenuItem>
          <MenuItem value={20}> 20 </MenuItem>
          <MenuItem value={30}> 30 </MenuItem>
        </Select>
        <FormHelperText>ay 7aga</FormHelperText>
      </FormControl>
      <FormControl sx={{ width: "300px" }} required>
        <Select
          variant="outlined"
          value={age}
          onChange={(e) => {
            console.log({ newVal: e.target.value });

            setAge(+e.target.value);
          }}
        >
          <MenuItem value={10}> 10 </MenuItem>
          <MenuItem value={20}> 20 </MenuItem>
          <MenuItem value={30}> 30 </MenuItem>
        </Select>
        <FormHelperText>ay 7aga</FormHelperText>
      </FormControl>
    </div>
  );
}

export default MuiSelect;
