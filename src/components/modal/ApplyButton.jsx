import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/modalSlice";
import { addTodo } from "../../redux/todoSlice";

export default function ApplyButton() {
  const dispatch = useDispatch();
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => {
          dispatch(hideModal());
          dispatch(addTodo());
        }}
        style={{ background: "rgb(108,99,255)", color: "white" }}
        variant="outlined"
      >
        Apply
      </Button>
    </Stack>
  );
}
