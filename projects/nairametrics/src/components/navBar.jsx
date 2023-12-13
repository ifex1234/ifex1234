import img from '../assets/DATA/IMAGES/exclusive/card-payment-750x536.webp'
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
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
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import InnerNavContents from "./innerNavContents";
import "./style.css";

// import LinearProgress from "@mui/material/LinearProgress";

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

      <NavigationBar />

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
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       const diff = Math.random() * 25;
  //       return Math.min(oldProgress + diff, 99);
  //     });
  //   }, 50);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // let [Contents, setShowContents] = useState("none");

  // function showContents() {
  //   setShowContents((Contents = "flex"));
  // }


  
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
        top='0px'
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

            <div className="navbar">
              <a href="#home">Home</a>
              <a href="#news">News</a>
              <div className="dropdown">
                <button className="dropbtn">
                  Dropdown
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </Box>
        </Box>

        <Box sx={{ cursor: "pointer" }}>
          <SearchIcon sx={{ color: "#333" }} />
        </Box>
        {/* 
<InnerNavContents dis={Contents} /> */}
      </Stack>
    </>
  );
}


