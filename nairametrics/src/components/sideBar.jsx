import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import PropTypes  from "prop-types";

export default function SideBar({display}) {
  return (
    <>
      <Box sx={{ width: {xs:"90vw", sm:"40vw"}, display:{display}}} height='100vh' bgcolor='#fff' position='fixed' zIndex='10'>
        <Box mt='5px' cursor= "pointer" mx='10px' width='85vw'>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            fullWidth
            
          > 
            <SearchIcon/>
          </TextField>
        </Box>

        <Box
          sx={{
            display: "flex",
            margin: 0,
            alignItems: 'flex-start',
            paddingX: "20px",
            flexDirection:"column",
          }}
        >
          
          <Stack
          display='flex'
          flexDirection='column'
          spacing={{xs:2, sm:4}}
          mb='20px'
          pb='40px'
          width={{xs:"80vw", sm:"30vw"}}
          borderBottom="1px solid black"
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
              <ExpandMore sx={{color:"#777", width:"18px"}}/>
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
              <ExpandMore sx={{color:"#777", width:"18px"}}/>
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
                fontWeight='500'
              >
                Financial
              </Link>
              <ExpandMore sx={{color:"#777", width:"18px"}}/>
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
              <ExpandMore sx={{color:"#777", width:"18px"}}/>
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
              <ExpandMore sx={{color:"#777", width:"18px"}}/>
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
              <ExpandMore sx={{color:"#777", width:"18px"}}/>
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
              <ExpandMore sx={{color:"#777", width:"18px"}}/>
              {/* <Box sx={{ width: "100px", display: "none" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box> */}
            </Stack>
            
          </Stack>
          
          <Stack sx={{ display: "flex", flexDirection: "row", color: "#333", mt:"20px" }}>
            <Box
              sx={{
                display: "inline-flex",
                flexDirection: "row",
                cursor: "pointer",
                color:"#243b93"
                
              }}
            >
              <LockIcon /> <Typography>Log in</Typography>{" "}
            </Box>{" "}
            <Box
              sx={{
                display: "inline-flex",
                flexDirection: "row",
                cursor: "pointer",
                color:"#243b93",
                ml:"10px"
              }}
            >
              {" "}
              <PersonIcon /> <Typography>Sign up</Typography>
            </Box>
          </Stack>

        </Box>


        <Box
          sx={{
            height: "165px",
            width: {xs:"80vw", sm:"40vw", md:'40px'},
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: {
                md: 'inline-flex',
                sm: 'inline-flex',
                xs: "inline-flex",
                lg: "none",
              },
              cursor: "pointer",
            }}
          >
            <FacebookIcon sx={{color:"blue"}}/>
            <YouTubeIcon sx={{color:"red"}}/>
            <TwitterIcon  sx={{color:"blue"}}/>
            <LinkedInIcon sx={{color:'skyblue'}}/>
          </Stack>
        </Box>
      </Box>
    </>
  );
}


SideBar.propTypes = {
  display: PropTypes.string
}