import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/modalSlice";

export default function CancelButton() {
  const dispatch = useDispatch();
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => dispatch(hideModal())}
        style={{ background: "rgb(108,99,255)", color: "white" }}
        variant="outlined"
      >
        Cancel
      </Button>
    </Stack>
  );
}
