import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/modalSlice";
import { addTodo } from "../../redux/todoSlice";
import PropTypes from "prop-types";

export default function ApplyButton({ text, setText, id }) {
  const dispatch = useDispatch();
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => {
          dispatch(hideModal());
          dispatch(addTodo({ label: text, id: id }));
          setText("");
        }}
        style={{ background: "rgb(108,99,255)", color: "white" }}
        variant="outlined"
      >
        Apply
      </Button>
    </Stack>
  );
}
ApplyButton.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  id: PropTypes.number,
};
