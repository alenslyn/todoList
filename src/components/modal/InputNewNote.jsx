import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const InputNewNote = ({ value, newText }) => {
  return (
    <form noValidate autoComplete="off">
      <TextField
        sx={{ width: "100%", maxWidth: 400 }}
        value={value}
        onChange={(event) => {
          newText(event.target.value);
        }}
        id="outlined-basic"
        placeholder="Input your note"
      />
    </form>
  );
};

InputNewNote.propTypes = {
  value: PropTypes.string.isRequired,
  newText: PropTypes.func.isRequired,
};

export default InputNewNote;
