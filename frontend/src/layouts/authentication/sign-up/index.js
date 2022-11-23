/**
 
*/

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Checkbox from "@mui/material/Checkbox";

// Hostel Management React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Cover() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    phoneNo: "",
    guardian_phone: "",
    national_id: "",
    profile_info: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user && !user.is_admin) {
      navigate("/dashboard");
    }
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const response = await axios.post("http://localhost:4000/student/signup", {
      email: input.email,
      password: input.name,
      name: input.name,
      gender: input.gender,
      phone_no: input.phoneNo,
      guardian_phone: input.guardian_phone,
      national_id: input.national_id,
      profile_info: input.profile_info,
    });
    if (response.data.error) {
      setError(response.data.error);
    } else {
      // localStorage.setItem("user", JSON.stringify(user.data));
      // navigate("/dashboard");
      navigate("/logout");
    }
    // <Navigate to="/dashboard" replace />;
  };
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        {error && <Alert severity="error">{error}</Alert>}
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                variant="standard"
                fullWidth
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="number"
                label="Phone No"
                variant="standard"
                fullWidth
                value={input.phoneNo}
                onChange={(e) => setInput({ ...input, phoneNo: e.target.value })}
              />
            </MDBox>
            <MDBox>
              <FormControl fullWidth style={{ marginBottom: "2rem" }}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={input.gender}
                  style={{ padding: ".8rem 0" }}
                  label="Gender"
                  onChange={(e) => setInput({ ...input, gender: e.target.value })}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </MDBox>
            <MDBox>
              <FormControl fullWidth>
                <TextField
                  id="outlined-multiline-static"
                  label="Profile Info"
                  multiline
                  fullWidth
                  rows={4}
                  value={input.profile_info}
                  onChange={(e) => setInput({ ...input, profile_info: e.target.value })}
                  // placeholder="profile info"
                />
              </FormControl>
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="number"
                label="ID Number"
                variant="standard"
                fullWidth
                value={input.national_id}
                onChange={(e) => setInput({ ...input, national_id: e.target.value })}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="number"
                label="Guardian Number"
                variant="standard"
                fullWidth
                value={input.guardian_phone}
                onChange={(e) => setInput({ ...input, guardian_phone: e.target.value })}
              />
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                sign Up
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
