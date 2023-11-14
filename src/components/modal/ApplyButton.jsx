import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ApplyButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button
        style={{ background: "rgb(108,99,255)", color: "white" }}
        variant="outlined"
      >
        Apply
      </Button>
    </Stack>
  );
}
