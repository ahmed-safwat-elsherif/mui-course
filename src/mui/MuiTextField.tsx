import {
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

function MuiTextField() {
  const [firstName, setFirstName] = useState("");

  return (
    <Stack direction="column" gap={2}>
      <Stack direction="column" gap={2} sx={{ width: "300px" }}>
        <TextField label="filled textfield" variant="filled" />
        <TextField label="outlined textfield" variant="outlined" />
        <TextField label="standard textfield" variant="standard" />
      </Stack>
      <Stack direction="column" gap={2} sx={{ width: "300px" }}>
        <TextField
          label="outlined textfield"
          color="error"
          variant="outlined"
        />
        <TextField label="outlined textfield" color="info" variant="outlined" />
        <TextField
          label="outlined textfield"
          color="primary"
          variant="outlined"
        />
        <TextField
          label="outlined textfield"
          color="warning"
          variant="outlined"
        />
        <TextField
          label="outlined textfield"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Stack direction="column" gap={2} sx={{ width: "300px" }}>
        <TextField
          label="disabled textfield"
          disabled
          color="secondary"
          variant="outlined"
        />
        <TextField
          error
          helperText="first name is required"
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="type number textfield"
          type="number"
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="type number textfield"
          type="password"
          color="secondary"
          variant="outlined"
        />

        <TextField
          label="default values"
          defaultValue={"test"}
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="default values"
          defaultValue={"test"}
          InputProps={{
            readOnly: true,
          }}
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="default values"
          defaultValue={"test"}
          disabled
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="default values"
          InputLabelProps={{
            shrink: true,
          }}
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="default values"
          multiline
          rows={4}
          defaultValue={"test"}
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="default values"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="default values"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="default values"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Stack direction="column" gap={2} sx={{ width: "300px" }}>
        <TextField
          label="default values"
          color="secondary"
          variant="outlined"
          value={firstName}
          onChange={(e) => {
            console.log({ value: e.target.value });

            setFirstName(e.target.value);
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
