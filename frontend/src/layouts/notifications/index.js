/**
 
*/

import React, { useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Hostel Management React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Hostel Management React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import axios from "axios";
import MDAlert from "components/MDAlert";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

function Notifications() {
  const [complains, setComplains] = useState([]);
  const [message, setMessage] = useState("");
  const [complainFrom, setComplainFrom] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/student/complains").then((response) => {
      setComplains(response.data);
    });
  }, []);

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      {name}
    </MDTypography>
  );

  const user = JSON.parse(localStorage.getItem("user"));

  const handleClickOpen = (id) => {
    setComplainFrom(id);
    setOpen(true);
  };

  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const handleClose = () => {
    setOpen(false);
  };

  console.log({ complainFrom });

  const handleSubmit = async () => {
    setOpen(false);
    await axios.post("http://localhost:4000/student/message", {
      message: input,
      to_id: complainFrom.toString(),
      student_id: user.student_id.toString(),
    });
  };

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/student/messages", { params: { id: user.student_id } })
      .then((response) => {
        setMessages(response.data);
      });
  }, []);
  console.log({ messages });
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>FeedBack</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Reply to the issue, and the student will recieve the message
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
            onChange={(e) => setInput(e.target.value)}
            value={input}
            // defaultValue="Default Value"
            // variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Send</Button>
        </DialogActions>
      </Dialog>
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              {user.is_admin === 1 && (
                <>
                  <MDBox p={2}>
                    <MDTypography variant="h5">Complains</MDTypography>
                  </MDBox>

                  <MDBox pt={2} px={2}>
                    {complains.map((complain) => (
                      <MDAlert color="info" handleClickOpen={handleClickOpen} complain={complain}>
                        {alertContent(complain.complain)}
                      </MDAlert>
                    ))}
                  </MDBox>
                </>
              )}
              {messages.map((message) => (
                <MDBox>
                  <div style={{ display: "flex", alignItem: "center" }}>
                    <p style={{ padding: "10px", fontSize: "15px" }}>{message.message}</p>
                    <p style={{ padding: "10px", fontSize: "12px" }}>
                      from <span>Admin</span>
                    </p>
                  </div>
                </MDBox>
              ))}
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
