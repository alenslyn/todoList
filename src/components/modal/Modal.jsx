import InputNewNote from "./InputNewNote";
import CancelButton from "./CancelButton";
import ApplyButton from "./ApplyButton";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../redux/modalSlice";
import { useState } from "react";

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
  const options = useSelector((state) => {
    if (state.modal.options) {
      return state.modal.options;
    } else {
      return {};
    }
  });

  const [text, setText] = useState(options.label || "");
  const isModalShow = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();

  const onClose = () => {
    setText("");
    dispatch(hideModal());
  };

  return (
    <div>
      <Modal
        open={isModalShow}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InputNewNote
            value={text}
            new={setText}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Text in a modal
          </InputNewNote>
          <CancelButton onClose={onClose} />
          <ApplyButton setText={setText} text={text} />
        </Box>
      </Modal>
    </div>
  );
}
