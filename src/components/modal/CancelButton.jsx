import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import PropTypes from "prop-types";

CancelButton.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default function CancelButton({ onClose }) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={onClose}
        style={{ background: "rgb(108,99,255)", color: "white" }}
        variant="outlined"
      >
        Cancel
      </Button>
    </Stack>
  );
}
