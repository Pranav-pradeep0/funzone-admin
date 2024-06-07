import {
  Box,
  Button,
  IconButton,
  InputBase,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Background from "../../assets/LoginBackground.svg";
import Logo from "../../assets/LogoMain.svg";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { login } from "../../service/allApi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const mediaQuery800px = useMediaQuery("(min-width:800px)");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((data)=> ({...data, [name]:value}) )
  };

  const handleLogin = async () => {
    const response = await login(loginData)
    console.log(response);
  }

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Box
        sx={{
          borderRadius: "30px",
          background: "rgba( 29, 14, 27, 0.8 )",
          backdropFilter: "blur( 4.5px )",
          position: "absolute",
          right: mediaQuery800px ? "10%" : "1%",
          top: mediaQuery800px ? "20%" : "15%",
          color: "white",
          display: "grid",
          placeItems: "center",
          padding: "50px 20px",
          gap: "30px",
          width: "400px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <img src={Logo} />
          <span style={{ fontWeight: "600", fontSize: "20px" }}>
            Admin Login
          </span>
        </Box>

        <InputBase
          fullWidth
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "40px",
            color: "white",
            padding: "5px 15px",
            "& ::placeholder": {
              textAlign: "center",
            },
          }}
        />

        <InputBase
          fullWidth
          name="password"
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "40px",
            color: "white",
            padding: "5px 15px",
            "& ::placeholder": {
              textAlign: "center",
            },
          }}
          endAdornment={
            showPassword ? (
              <IconButton onClick={() => setShowPassword(false)}>
                <Eye size={20} color="white" />
              </IconButton>
            ) : (
              <IconButton onClick={() => setShowPassword(true)}>
                <EyeSlash size={20} color="white" />
              </IconButton>
            )
          }
        />

        <Link
          style={{
            marginLeft: "auto",
            color: "#E94057",
            textDecoration: "none",
          }}
        >
          Forgot Password ?
        </Link>

        <Button
          fullWidth
          onClick={handleLogin}
          sx={{
            borderRadius: "40px",
            backgroundColor: "#BF5AE0",
            ":hover": {
              backgroundColor: "#BF5AE0",
            },
            paddingBlock: "10px",
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
