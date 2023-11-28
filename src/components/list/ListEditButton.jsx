import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/modalSlice";
import PropTypes from "prop-types";

const ListEditButton = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <IconButton onClick={() => dispatch(showModal({ options: todo }))}>
        <img src="images/Edit.svg" alt="Add Button" />
      </IconButton>
    </div>
  );
};

ListEditButton.propTypes = {
  todo: PropTypes.objectOf({
    id: PropTypes.number,
    label: PropTypes.string,
  }),
};

export default ListEditButton;
