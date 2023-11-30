import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./SelectTab.css";
import { setChecked, ALL, COMPLETE, INCOMPLETE } from "../../redux/selectSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function SelectTab() {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.select.checked);

  const handleChange = (event) => {
    dispatch(setChecked(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          className="select_button"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={checked}
          onChange={handleChange}
        >
          <MenuItem className="menu_item" value={ALL}>
            All
          </MenuItem>
          <MenuItem value={COMPLETE}>Complete</MenuItem>
          <MenuItem value={INCOMPLETE}>Incomplete</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
