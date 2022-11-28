/**
 
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Hostel Management React components
import MDBox from "components/MDBox";

// Hostel Management React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

function Dashboard() {
  // const { sales, tasks } = reportsLineChartData;
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {user.is_admin === 1 && (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="dark"
                    icon="weekend"
                    title="Available Rooms"
                    count={7}
                    percentage={{
                      color: "success",
                      // amount: "+55%",
                      // label: "than lask week",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    icon="leaderboard"
                    title="Total Rooms"
                    count="2,300"
                    percentage={{
                      color: "success",
                      // amount: "+3%",
                      // label: "than last month",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="success"
                    icon="store"
                    title="Revenue"
                    count="_"
                    percentage={{
                      color: "success",
                      // amount: "+1%",
                      // label: "than yesterday",
                    }}
                  />
                </MDBox>
              </Grid>
              {/* <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="primary"
                    icon="person_add"
                    title="Rooms Students Capacity"
                    count="+91"
                    percentage={{
                      color: "success",
                      amount: "",
                      label: "Just updated",
                    }}
                  />
                </MDBox>
              </Grid> */}
            </Grid>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={6}
                lg={8}
                style={{
                  background: "white",
                  margin: "1.4rem",
                  padding: "1rem",
                  borderRadius: "1rem",
                }}
              >
                <MDBox mb={2}>
                  <MDInput
                    type="text"
                    label="Notice Title"
                    fullWidth

                    // value='{input.email}'
                    // onChange={(e) => setInput({ ...input, email: e.target.value })}
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="text"
                    label="Notice Details"
                    fullWidth

                    // value='{input.email}'
                    // onChange={(e) => setInput({ ...input, email: e.target.value })}
                  />
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton variant="gradient" color="info" fullWidth>
                    Create a Notice
                  </MDButton>
                </MDBox>
              </Grid>
            </Grid>
          </>
        )}

        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
