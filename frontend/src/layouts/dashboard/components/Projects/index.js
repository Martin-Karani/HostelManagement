/**
 
*/

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Hostel Management React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Projects() {
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

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

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Notice Board
          </MDTypography>
        </MDBox>
        <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
        {renderMenu}
      </MDBox>
      <MDBox>
        {[...Array(5)].map(() => (
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
            <h4 style={{ fontSize: "16px" }}>Reopening January</h4>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              Reopening Sementer 2 is on 4th January for 1st Firsts LayoutContainers r 1st Firsts
              LayoutContainers
            </p>
            <p
              style={{
                fontSize: "12px",
                textAlign: "right",
                color: "blue",
                textDecoration: "italic",
              }}
            >
              <i>19 February 2021</i>
            </p>
          </div>
        ))}
      </MDBox>
    </Card>
  );
}

export default Projects;
