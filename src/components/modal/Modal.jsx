import InputNewNote from "./InputNewNote";
import CancelButton from "./CancelButton";
import ApplyButton from "./ApplyButton";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../redux/modalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const isModalShow = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        open={isModalShow}
        onClose={() => dispatch(hideModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InputNewNote id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </InputNewNote>
          <CancelButton onClick={() => dispatch(hideModal())} />
          <ApplyButton />
        </Box>
      </Modal>
    </div>
  );
}
