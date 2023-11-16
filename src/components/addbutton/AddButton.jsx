import IconButton from "@mui/material/IconButton";
import "./AddButton.css";

const AddButton = () => {
  return (
    <div className="add_button">
      <IconButton>
        <img src="images/addButton.svg" alt="Add Button" />
      </IconButton>
    </div>
  );
};
export default AddButton;
