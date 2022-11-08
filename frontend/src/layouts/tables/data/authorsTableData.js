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

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <img src={image} alt={name} width="100px" style={{ borderRadius: 10 }} />
      <MDBox ml={6} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Room No", accessor: "author", width: "45%", align: "left" },
      { Header: "Room Capacity", accessor: "status", align: "center" },
      { Header: "Last Updated", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="Room #24" email="Q-Hostels" />,
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
        author: <Author image={team2} name="Room #2" email="Q-Hostels" />,
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
        author: <Author image={team2} name="Room #24" email="N-Hostels" />,
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
        author: <Author image={team2} name="Room #24" email="Q-Hostels" />,
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
        author: <Author image={team2} name="Room #24" email="N-Hostels" />,
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
        author: <Author image={team2} name="Room #24" email="P-Hostels" />,
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
        author: <Author image={team2} name="Room #24" email="Q-Hostels" />,
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
