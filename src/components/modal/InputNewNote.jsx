import { TextField } from "@mui/material";

const InputNewNote = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField id="outlined-basic" placeholder="Input your note" />
    </form>
  );
};

export default InputNewNote;
