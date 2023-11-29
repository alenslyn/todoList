import TodoForm from "./TodoForm";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../redux/modalSlice";

export default function BasicModal() {
  const isModalShow = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();

  const onClose = () => {
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
        <TodoForm />
      </Modal>
    </div>
  );
}
