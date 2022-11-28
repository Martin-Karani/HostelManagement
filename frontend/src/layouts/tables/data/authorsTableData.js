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
import MDAlert from "components/MDAlert";
import Sidebar from "./sidebar";

export default function data() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [showAlert, setShowAlert] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBooked = () => {
    setShowAlert(true);
    setOpen(false);
  };

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      You have Successfully Booked room {name}
    </MDTypography>
  );
  const Author = ({ image, name, hostelName }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      {showAlert && (
        <MDBox
          pt={2}
          px={2}
          sx={{ position: "absolute", top: 0, right: 0, left: 0, margin: "auto" }}
        >
          <MDAlert color="success" dismissible={true}>
            {alertContent("24")}
          </MDAlert>
        </MDBox>
      )}

      <img src={image} alt={name} width="100px" style={{ borderRadius: 10 }} />
      <MDBox ml={6} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{hostelName}</MDTypography>
      </MDBox>
      <Dialog
        open={open}
        maxWidth="lg"
        sx={{
          background: "lightgray",
        }}
      >
        <div style={{ display: "flex", padding: "2rem" }}>
          <Sidebar />
          <div>
            <DialogTitle>Select Your Bed</DialogTitle>
            <p style={{ padding: "0 0 0 15px" }}>Each bed is 7000 per semester</p>
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
                    <p>Bed {idx + 1}</p>
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
                    <p>Bed {idx + 4}</p>
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
                onClick={handleBooked}
                size="small"
                color="success"
              >
                BOOK
              </MDButton>
            </DialogActions>
          </div>
        </div>
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
      { Header: "Hostel Name", accessor: "author", width: "45%", align: "left" },
      { Header: "Hotel Capacity", accessor: "status", align: "center" },
      { Header: "Last Updated", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="Hostel A" hostelName='"Q-Hostels"' />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="14 Rooms" color="success" variant="gradient" size="sm" />
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
        author: <Author image={team2} name="Hostel B" hostelName='"Q-Hostels"' />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="20 Rooms" color="success" variant="gradient" size="sm" />
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
        author: <Author image={team2} name="Hostel C" hostelName='"N-Hostels"' />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="30 Rooms" color="success" variant="gradient" size="sm" />
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
        author: <Author image={team2} name="Hostel D" hostelName='"Q-Hostels"' />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="12 " color="success" variant="gradient" size="sm" />
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
        author: <Author image={team2} name="Hostel E" hostelName='"N-Hostels"' />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="14 Rooms" color="success" variant="gradient" size="sm" />
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
        author: <Author image={team2} name="Hostel F" hostelName='"P-Hostels"' />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="4 Rooms" color="success" variant="gradient" size="sm" />
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
    ],
  };
}
