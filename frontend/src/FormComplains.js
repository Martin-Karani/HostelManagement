import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MDBox from "components/MDBox";
import { Icon } from "@mui/material";

export default function FormComplains() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        // width="3.25rem"
        // height="3.25rem"
        bgColor="linear-gradient(195deg, #42424a, #191919)"
        shadow="sm"
        borderRadius="5px"
        position="fixed"
        right="2rem"
        bottom="2rem"
        zIndex={99}
        color="white"
        sx={{ cursor: "pointer", padding: "8px 18px" }}
        // onClick={handleConfiguratorOpen}
        onClick={handleClickOpen}
      >
        <Icon fontSize="small" color="inherit">
          message
        </Icon>
        Complains
      </MDBox>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>FeedBack</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please the complain/Issue your are facing. We will send the issue to the Admin
          </DialogContentText>
          {/* <TextField
            id="name"
            label="Email Address"
            type="email"
            /> */}
          <TextField
            margin="dense"
            // autoFocus
            id="outlined-multiline-static"
            label="Complain"
            multiline
            fullWidth
            rows={4}
            // defaultValue="Default Value"
            // variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
