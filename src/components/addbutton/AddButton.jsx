import IconButton from "@mui/material/IconButton";
import "./AddButton.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

const AddButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="add_button">
      <IconButton onClick={() => dispatch(addTodo())}>
        <img src="images/addButton.svg" alt="Add Button" />
      </IconButton>
    </div>
  );
};
export default AddButton;
