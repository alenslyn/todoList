import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import "./CheckBox.css";
import { useSelector } from "react-redux";

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);
  const todos = useSelector((state) => state.todos.todos);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 1100 }}>
      {todos.map(({ id: value, label }) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            className="list"
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments"></IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  //   checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                  style={{ color: "rgb(108,99,255)" }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={label}
                // className={checked ? "list-item" : ""}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
