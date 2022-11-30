/**
 
*/

import { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Hostel Management React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
import BookedStudent from "BookedStudent";

function Projects() {
  const [menu, setMenu] = useState(null);
  const [notices, setNotices] = useState([]);
  const [rooms, setRooms] = useState([]);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);
  useEffect(() => {
    axios.get("http://localhost:4000/student/notices").then((response) => {
      setNotices(response.data);
    });
    axios.get("http://localhost:4000/student/rooms").then((response) => {
      setRooms(response.data);
    });
  }, []);
  console.log(rooms);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Card>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <MDBox>
            <MDTypography variant="h6" gutterBottom>
              Notice Board
            </MDTypography>
          </MDBox>
          <MDBox color="text" px={2}>
            <Icon
              sx={{ cursor: "pointer", fontWeight: "bold" }}
              fontSize="small"
              onClick={openMenu}
            >
              more_vert
            </Icon>
          </MDBox>
          {renderMenu}
        </MDBox>
        <MDBox>
          {notices.map((notice) => (
            <div
              style={{
                marginLeft: "20px",
                marginBottom: "16px",
                marginRight: "20px",
                backgroundColor: "#F7F5F3",
                padding: "2px 15px",
                borderRadius: "5px",
              }}
            >
              <h4 style={{ fontSize: "16px" }}>{notice.notice_title}</h4>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "300",
                }}
              >
                {notice.notice_details}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "right",
                  color: "blue",
                  textDecoration: "italic",
                }}
              >
                <i>19 February 2022</i>
              </p>
            </div>
          ))}
        </MDBox>
        <MDBox>
          {/* <p>fkadjflk</p> */}
          {/* {console.log({ rooms })} */}
          {user.is_admin && (
            <h4 style={{ marginLeft: "1rem", padding: "10px" }}>Available Rooms</h4>
          )}
          <div>
            {user.is_admin &&
              rooms.map((room) => (
                <div
                  style={{
                    marginLeft: "20px",
                    marginBottom: "16px",
                    marginRight: "20px",
                    backgroundColor: "#F7F5F3",
                    padding: "2px 15px",
                    borderRadius: "5px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    {room.hostel_name}
                  </p>
                  <p>Room {room.room_id}</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "300",
                    }}
                  >
                    Available Beds 4
                  </p>
                </div>
              ))}
          </div>
        </MDBox>
      </Card>
      {user.is_admin && <BookedStudent />}
    </div>
  );
}

export default Projects;
