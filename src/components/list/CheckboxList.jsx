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
import { ALL, COMPLETE, INCOMPLETE } from "../../redux/selectSlice";

const filterFn = (checked, todo) => {
  if (checked === COMPLETE) {
    return todo.checked;
  }
  if (checked === INCOMPLETE) {
    return !todo.checked;
  }
  if (checked === ALL) {
    return true;
  }
};

export default function CheckboxList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const checkedTodo = useSelector((state) => state.select.checked);
  const search = useSelector((state) => state.search.value);

  const handleToggle = (checked, id) => () => {
    dispatch(updateTodoList({ checked: !checked, id: id }));
  };

  return (
    <div className="list">
      <List sx={{ width: "100%", maxWidth: 700 }}>
        {todos
          .filter((todo) => filterFn(checkedTodo, todo))
          .filter(({ label }) =>
            label.toLowerCase().includes(search.toLowerCase())
          )
          .map(({ id: value, label, checked }) => {
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
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                      style={{ color: "rgb(108,99,255)" }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={label} />
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
