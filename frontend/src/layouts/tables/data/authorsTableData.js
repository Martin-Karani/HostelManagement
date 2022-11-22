/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
 
*/

// Hostel Management React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/hostel1.jpeg";
import MDButton from "components/MDButton";

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function data() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Author = ({ image, name, hostelName }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <img src={image} alt={name} width="100px" style={{ borderRadius: 10 }} />
      <MDBox ml={6} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{hostelName}</MDTypography>
      </MDBox>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          background: "transparent",
        }}
      >
        <DialogTitle>Select Room No</DialogTitle>
        <DialogContent>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            {[...Array(3)].map((_, idx) => (
              <Box
                component="div"
                onClick={() => setSelected(idx + 1)}
                sx={{
                  width: 100,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 60,
                  marginBottom: "10px",
                  border: "1px solid gray",
                  background: selected === idx + 1 ? "#d1d5db" : "none",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#d1d5db",
                    opacity: [0.9, 0.8, 0.7],
                    color: "white",
                  },
                }}
              >
                <p>Room {idx + 1}</p>
              </Box>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            {[...Array(3)].map((_, idx) => (
              <Box
                component="div"
                onClick={() => setSelected(idx + 4)}
                sx={{
                  width: 100,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 60,
                  border: "1px solid gray",
                  background: selected === idx + 4 ? "#d1d5db" : "none",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#d1d5db",
                    opacity: [0.9, 0.8, 0.7],
                    color: "white",
                  },
                }}
              >
                <p>Room {idx + 4}</p>
              </Box>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="success">
            Cancel
          </Button>
          {/* <Button onClick={handleClose}>Book</Button> */}
          <MDButton
            // component={Link}
            // to={action.route}
            variant="outlined"
            onClick={handleClose}
            size="small"
            color="success"
          >
            BOOK
          </MDButton>
        </DialogActions>
      </Dialog>
    </MDBox>
  );
  // const hostels = [
  //   {
  //     author: { image: team2, name: "Room 24", hostelName: "QHostels" },
  //     status: "4 Students",
  //     employed: "Yesterday",
  //   },
  // ];
  return {
    columns: [
      { Header: "Room No", accessor: "author", width: "45%", align: "left" },
      { Header: "Room Capacity", accessor: "status", align: "center" },
      { Header: "Last Updated", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="Room #24" hostelName="Q-Hostels" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="4 Students" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Yesterday
          </MDTypography>
        ),
        action: (
          <MDButton
            // component={Link}
            // to={action.route}
            variant="outlined"
            onClick={handleClickOpen}
            size="small"
            color="success"
          >
            BOOK
          </MDButton>
        ),
      },
      {
        author: <Author image={team2} name="Room #2" hostelName="Q-Hostels" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="4 Students" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Yesterday
          </MDTypography>
        ),
        action: (
          <MDButton
            // component={Link}
            // to={action.route}
            variant="outlined"
            size="small"
            color="success"
          >
            BOOK
          </MDButton>
        ),
      },
      {
        author: <Author image={team2} name="Room #24" hostelName="N-Hostels" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="4 Students" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Yesterday
          </MDTypography>
        ),
        action: (
          <MDButton
            // component={Link}
            // to={action.route}
            variant="outlined"
            size="small"
            color="success"
          >
            BOOK
          </MDButton>
        ),
      },
      {
        author: <Author image={team2} name="Room #24" hostelName="Q-Hostels" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="4 Students" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Yesterday
          </MDTypography>
        ),
        action: (
          <MDButton
            // component={Link}
            // to={action.route}
            variant="outlined"
            size="small"
            color="success"
          >
            BOOK
          </MDButton>
        ),
      },
      {
        author: <Author image={team2} name="Room #24" hostelName="N-Hostels" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="4 Students" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Yesterday
          </MDTypography>
        ),
        action: (
          <MDButton
            // component={Link}
            // to={action.route}
            variant="outlined"
            size="small"
            color="success"
          >
            BOOK
          </MDButton>
        ),
      },
      {
        author: <Author image={team2} name="Room #24" hostelName="P-Hostels" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="4 Students" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Yesterday
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            BOOK
          </MDTypography>
        ),
      },
      {
        author: <Author image={team2} name="Room #24" hostelName="Q-Hostels" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="4 Students" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Yesterday
          </MDTypography>
        ),
        action: (
          <MDButton
            // component={Link}
            // to={action.route}
            variant="outlined"
            size="small"
            color="success"
          >
            BOOK
          </MDButton>
        ),
      },
    ],
  };
}
