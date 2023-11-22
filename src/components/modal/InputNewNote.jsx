import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const InputNewNote = (props) => {
  return (
    <form noValidate autoComplete="off">
      <TextField
        value={props.value}
        onChange={(event) => {
          props.new(event.target.value);
        }}
        id="outlined-basic"
        placeholder="Input your note"
      />
    </form>
  );
};

InputNewNote.propTypes = {
  value: PropTypes.string.isRequired,
  new: PropTypes.string.isRequired,
};

export default InputNewNote;
