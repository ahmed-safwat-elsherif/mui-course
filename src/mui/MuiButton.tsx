import { Button, Stack, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

function MuiButton() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Stack direction="column" gap={2}>
      <Stack direction="row">
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>
        <Button variant="text">Text</Button>
      </Stack>
      <Stack direction="row" gap={2}>
        <Button variant="contained" color="primary">
          Text
        </Button>
        <Button variant="contained" color="error">
          Text
        </Button>
        <Button variant="contained" color="secondary">
          Text
        </Button>
        <Button variant="contained" color="success">
          Text
        </Button>
        <Button variant="contained" color="info">
          Text
        </Button>
        <Button variant="contained" color="warning">
          Text
        </Button>
      </Stack>
      <Box>
        <Button variant="contained" color="warning" size="large">
          Text
        </Button>
        <Button variant="contained" color="warning" size="medium">
          Text
        </Button>
        <Button variant="contained" color="warning" size="small">
          Text
        </Button>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="warning"
          startIcon={<DeleteIcon />}
          size="small"
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="warning"
          endIcon={<DeleteIcon />}
          size="small"
        >
          Delete
        </Button>
      </Box>
      <Box>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Box>
        <Button
          onClick={() => console.log("click")}
          disableRipple
          disableElevation
          variant="contained"
          color="primary"
        >
          Btn No ripple
        </Button>
      </Box>
      <Box>
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          startIcon={<DeleteIcon />}
          onClick={() => setIsLoading(true)}
          variant="contained"
        >
          loading button
        </LoadingButton>
      </Box>
    </Stack>
  );
}

export default MuiButton;
