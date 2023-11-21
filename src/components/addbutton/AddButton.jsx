import IconButton from "@mui/material/IconButton";
import "./AddButton.css";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/modalSlice";

const AddButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="add_button">
      <IconButton onClick={() => dispatch(showModal())}>
        <img src="images/addButton.svg" alt="Add Button" />
      </IconButton>
    </div>
  );
};
export default AddButton;
