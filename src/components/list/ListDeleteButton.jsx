import IconButton from "@mui/material/IconButton";
import "./CheckBox.css";
import PropTypes from "prop-types";
import { deleteTodo } from "../../redux/todoSlice";
import { useDispatch } from "react-redux";

const ListDeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <IconButton onClick={() => dispatch(deleteTodo({ id }))}>
        <img src="images/delete.svg" alt="Add Button" />
      </IconButton>
    </div>
  );
};
ListDeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
};
export default ListDeleteButton;
