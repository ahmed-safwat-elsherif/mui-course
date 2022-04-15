import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import { useState } from "react";

function MuiCheckbox() {
  const [checked, setChecked] = useState(true);
  return (
    <Stack direction="row" gap={2}>
      <Checkbox defaultChecked />
      <Checkbox checked />
      <Checkbox indeterminate />
      <FormControlLabel label="check it" control={<Checkbox />} />
      <FormControlLabel
        label="controlled checkbox"
        control={
          <Checkbox
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
          />
        }
      />
    </Stack>
  );
}

export default MuiCheckbox;
