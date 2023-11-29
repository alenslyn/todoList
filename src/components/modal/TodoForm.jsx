import { useState } from "react";
import InputNewNote from "./InputNewNote";
import { useSelector } from "react-redux";
import CancelButton from "./CancelButton";
import ApplyButton from "./ApplyButton";
import Box from "@mui/material/Box";

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

const TodoForm = () => {
  const options = useSelector((state) => {
    if (state.modal.options) {
      return state.modal.options;
    } else {
      return {};
    }
  });
  const [text, setText] = useState(options.label || "");
  const onClose = () => {
    setText("");
  };

  return (
    <Box sx={style}>
      <InputNewNote
        value={text}
        newText={setText}
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        Text in a modal
      </InputNewNote>
      <CancelButton onClose={onClose} />
      <ApplyButton id={options.id} setText={setText} text={text} />
    </Box>
  );
};

export default TodoForm;
