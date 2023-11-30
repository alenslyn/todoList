import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import "./CheckBox.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ListEditButton from "./ListEditButton";
import ListDeleteButton from "./ListDeleteButton";
import { updateTodoList } from "../../redux/todoSlice";

export default function CheckboxList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleToggle = (checked, id) => () => {
    dispatch(updateTodoList({ checked: !checked, id: id }));
  };

  return (
    <div className="list">
      <List sx={{ width: "100%", maxWidth: 700 }}>
        {todos.map(({ id: value, label, checked }) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={value} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(checked, value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked}
                    // tabIndex={-1}
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
              <ListEditButton todo={{ id: value, label }} />
              <ListDeleteButton id={value} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
