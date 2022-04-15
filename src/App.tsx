import { ScopedCssBaseline, Typography } from "@mui/material";
import MuiTypography from "./mui/MuiTypography";
import MuiButton from "./mui/MuiButton";
import MuiButtonGroup from "./mui/MuiButtonGroup";
import MuiTextField from "./mui/MuiTextField";
import MuiSelect from "./mui/MuiSelect";
import MuiTable from "./mui/MuiTable";
import MuiCheckbox from "./mui/MuiCheckbox";
import MuiAutocomplete from "./mui/MuiAutocomplete";
import MuiLayout from "./mui/MuiLayout";
function App() {
  return (
    // variant -> styling
    <div>
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiButtonGroup /> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      {/* <MuiTable /> */}
      {/* <MuiCheckbox /> */}
      {/* <MuiAutocomplete /> */}
      {/* <h1>hello from the outer scope</h1> */}
      {/* <ScopedCssBaseline> */}
      {/* <h1>hello from the inner scope</h1> */}
      <MuiLayout />
      {/* </ScopedCssBaseline> */}
    </div>
  );
}

export default App;
