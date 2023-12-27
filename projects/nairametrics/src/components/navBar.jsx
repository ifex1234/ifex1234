import img from "../assets/DATA/IMAGES/exclusive/card-payment-750x536.webp";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {
  Exclusive,
  Economy,
  Financial_Literacy,
  Industries,
  Lifestyle,
  Markets,
  Opinions,
} from "./constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import SideBar from "./sideBar";
import Cancel from "@mui/icons-material/Cancel";
import { useState, useRef } from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import "./style.css";


export default function NavBar() {
  let [displayComponent, setDisplayComponents] = useState("none");
  let [cancel, setCancel] = useState("none");

  const [checked, setChecked] = useState(false);
  const containerRef = useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  function showSideBar() {
    setDisplayComponents((displayComponent = "grid"));
    setCancel((cancel = "inline-grid"));
  }
  function removeSideBar() {
    setDisplayComponents((displayComponent = "none"));
    setCancel((cancel = "none"));
  }
  return (
    <>
      <Box
        sx={{
          bgcolor: "#243b93",
          height: "165px",
          width: "100vw",
          display: {
            lg: "flex",
            sm: "none",
            xs: "none",
            xl: "flex",
            md: "flex",
          },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Stack sx={{ display: "flex", flexDirection: "row", color: "#fff" }}>
          {" "}
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "row",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            {" "}
            <LockIcon /> <Typography>Log in</Typography>{" "}
          </Box>{" "}
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "row",
              cursor: "pointer",
            }}
          >
            <PersonIcon /> <Typography>Register</Typography>
          </Box>
        </Stack>
        <Typography
          variant="h2"
          color="#fff"
          sx={{ fontFamily: "san-serif", cursor: "pointer" }}
        >
          Nairametrics
        </Typography>
      </Box>

      <Stack
        display={{ xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" }}
        flexDirection="row"
        justifyContent="space-around"
        width="100vw"
        height="50px"
        position="sticky"
        top="0px"
        bgcolor="#243b93"
        color="#fff"
        alignItems="center"
      >
        <Box ref={containerRef}>
          <Button onClick={showSideBar}>
            <MenuIcon />
          </Button>
        </Box>
        <Box>
          <Typography variant="h5">Nairametrics</Typography>
        </Box>
        <Box>
          <SearchIcon />
        </Box>
      </Stack>

      <SideBar display={displayComponent} />

      <Navigator/>

      <Box
        position={{ xs: "absolute", sm: "absolute", md: "static" }}
        top="10px"
        right={{ xs: "5px", sm: "10px" }}
        zIndex="10"
        display={cancel}
        mx={{ xs: "-15px", sm: "10px" }}
      >
        <Button size="large" onClick={removeSideBar} sx={{ color: "inherit" }}>
          <Cancel sx={{ height: "100px" }} />
        </Button>
      </Box>
    </>
  );
}
function NavigationBar() {
  return (
    <>
      <Stack
        bgcolor="#abb8c3"
        height="50px"
        width="100vw"
        display={{ xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" }}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        p={{ md: "10px 20px", lg: "10px 50px" }}
        overflow="hidden"
        position="sticky"
        top="0px"
      >
        <Box display="inline-flex" flexDirection="row" gap="10px">
          <FacebookIcon />
          <YouTubeIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Box>

        <Box>
          <Box
            display={{
              xs: "none",
              sm: "none",
              md: "inline-flex",
              lg: "inline-flex",
            }}
            fontSize={{ md: "12px", lg: "14px" }}
            alignItems="flex-end"
            mx={{ md: "2px", lg: "10px", xl: "10px" }}
            alignContent="center"
            gap={1}
          >
            <Stack
              direction="row"
              spacing={-0.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link
                component={RouterLink}
                to={"/"}
                variant="body1"
                color="#000"
                underline="none"
              >
                Home
              </Link>
              {/* <Box sx={{ width: "100px", display: "none" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box> */}
            </Stack>

            <Stack
              direction="row"
              spacing={0}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link
                component={RouterLink}
                to={"exclusive"}
                variant="body1"
                color="#000"
                underline="none"
              >
                {" "}
                Exclusive{" "}
              </Link>
              <ExpandMore sx={{ color: "#777", width: "18px" }} />
              {/* <Box sx={{ width: "100px", display: "none" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box> */}
            </Stack>

            <Stack
              direction="row"
              spacing={0}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link
                component={RouterLink}
                to={"economy"}
                variant="body1"
                color="#000"
                underline="none"
              >
                Economy
              </Link>
              <ExpandMore sx={{ color: "#777", width: "18px" }} />
              {/* <Box sx={{ width: "100px", display: "none" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box> */}
            </Stack>

            <Stack
              direction="row"
              spacing={0}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link
                component={RouterLink}
                to={"financial"}
                variant="body1"
                color="#000"
                underline="none"
                fontWeight="500"
              >
                Financial
              </Link>
              <ExpandMore sx={{ color: "#777", width: "18px" }} />
              {/* <Box sx={{ width: "100px", display: "none" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box> */}
            </Stack>

            <Stack
              direction="row"
              spacing={0}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link
                component={RouterLink}
                to={"industries"}
                variant="body1"
                color="#000"
                underline="none"
              >
                {" "}
                Industries{" "}
              </Link>
              <ExpandMore sx={{ color: "#777", width: "18px" }} />
              {/* <Box sx={{ width: "100px", display: "none" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box> */}
            </Stack>

            <Stack
              direction="row"
              spacing={0}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link
                component={RouterLink}
                to={"business"}
                variant="body1"
                color="#000"
                underline="none"
              >
                {" "}
                Business News
              </Link>
              {/* <Box sx={{ width: "100px", display: "none" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box> */}
            </Stack>

            <Stack
              direction="row"
              spacing={0}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link
                component={RouterLink}
                to={"lifestyle"}
                variant="body1"
                color="#000"
                underline="none"
              >
                Lifestyle
              </Link>
              <ExpandMore sx={{ color: "#777", width: "18px" }} />
              {/* <Box sx={{ width: "100px", display: "none" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box> */}
            </Stack>

            <Stack
              direction="row"
              spacing={0}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link
                component={RouterLink}
                to={"markets"}
                variant="body1"
                color="#000"
                underline="none"
              >
                Markets
              </Link>
              <ExpandMore sx={{ color: "#777", width: "18px" }} />
              {/* <Box sx={{ width: "100px", display: "none" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box> */}
            </Stack>

            <Stack
              direction="row"
              spacing={0}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link
                component={RouterLink}
                to={"opinions"}
                variant="body1"
                color="#000"
                underline="none"
              >
                Opinions
              </Link>
              <ExpandMore sx={{ color: "#777", width: "18px" }} />
              {/* <Box sx={{ width: "100px", display: "none" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box> */}
            </Stack>
          </Box>
        </Box>

        <Box sx={{ cursor: "pointer" }}>
          <SearchIcon sx={{ color: "#333" }} />
        </Box>
      </Stack>
    </>
  );
}

export const Navigator = () => {


  return (
     <div className="navbar">
       <Box display="inline-flex" flexDirection="row" gap="10px" width='10vw'>
          <FacebookIcon />
          <YouTubeIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Box>


    <Box width='75vw'>
      <div className="dropdown">
        <button className="dropbtn">
          <NavLink className="route " to="/ll">
            <Typography variant="body1" fontWeight="bold" color="#444">
              Home
            </Typography>
          </NavLink>
        </button>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <NavLink className="route " to="exclusive">
            <Typography variant="body1" fontWeight="bold" color="#444">
              Exclusive
            </Typography>
          </NavLink>
          <ExpandMore sx={{ color: "#777", width: "18px" }} />
        </button>
        <div className="dropdown-content">
          {Exclusive.map((content, index) => (
            <NavLink key={index} to="#">
              {content}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <NavLink className="route " to="market">
            <Typography variant="body1" fontWeight="bold" color="#444">
              Markets
            </Typography>
          </NavLink>
          <ExpandMore sx={{ color: "#777", width: "18px" }} />
        </button>
        <div className="dropdown-content">
          {Markets.map((content, index) => (
            <NavLink key={index} to="#">
              {content}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <NavLink className="route " to="industries">
            <Typography variant="body1" fontWeight="bold" color="#444">
              Sectors
            </Typography>
          </NavLink>
          <ExpandMore sx={{ color: "#777", width: "18px" }} />
        </button>
        <div className="dropdown-content">
          {Industries.map((content, index) => (
            <NavLink key={index} to="#">
              {content}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <NavLink className="route " to="economy">
            <Typography variant="body1" fontWeight="bold" color="#444">
              Economy
            </Typography>
          </NavLink>
          <ExpandMore sx={{ color: "#777", width: "18px" }} />
        </button>
        <div className="dropdown-content">
          {Economy.map((content, index) => (
            <NavLink key={index} to="#">
              {content}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <NavLink className="route " to="business">
            <Typography variant="body2" fontWeight="bold" color="#444">
              Business News
            </Typography>
          </NavLink>
        </button>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <NavLink className="route " to="financial">
            <Typography variant="body2" fontWeight="bold" color="#444">
              Financial Literacy
            </Typography>
          </NavLink>
          <ExpandMore sx={{ color: "#777", width: "18px" }} />
        </button>
        <div className="dropdown-content">
          {Financial_Literacy.map((content, index) => (
            <NavLink key={index} to="#">
              {content}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <NavLink className="route " to="lifestyle">
            <Typography variant="body1" fontWeight="bold" color="#444">
              Lifestyle
            </Typography>
          </NavLink>
          <ExpandMore sx={{ color: "#777", width: "18px" }} />
        </button>
        <div className="dropdown-content">
          {Lifestyle.map((content, index) => (
            <NavLink key={index} to="#">
              {content}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          <NavLink className="route " to="opinions">
            <Typography variant="body1" fontWeight="bold" color="#444">
              Opinion
            </Typography>
          </NavLink>
          <ExpandMore sx={{ color: "#777", width: "18px" }} />
        </button>
        <div className="dropdown-content">
          {Opinions.map((content, index) => (
            <NavLink key={index} to="#">
              {content}
            </NavLink>
          ))}
        </div>
      </div>
      </Box>

      <Box sx={{ cursor: "pointer", width:"5vw" }}>
          <SearchIcon sx={{ color: "#333" }} />
        </Box>
    </div>
    
    
   
  );
};
