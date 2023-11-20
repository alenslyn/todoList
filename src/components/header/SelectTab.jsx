import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./SelectTab.css";

export default function SelectTab() {
  const [note, setNote] = React.useState("");

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          className="select_button"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={note}
          onChange={handleChange}
        >
          <MenuItem className="menu_item" value={1}>
            All
          </MenuItem>
          <MenuItem value={2}>Complete</MenuItem>
          <MenuItem value={3}>Incomplete</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
