import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Tinubu from "../assets/tinu.jpg";
import { ArrowBackIos, ArrowForwardIosSharp } from "@mui/icons-material";

export default function Slider() {
  return (
    <>
      <Card
        sx={{
          margin: "30px 10px",
          height: "auto",
          width: { xs: "100%", sm: "100%", md: "100%" },
        }}
      >
        <CardMedia
          image={Tinubu}
          alt="tinubu image"
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
            height:{xs:"200px", sm:"400px", md:"400px", lg:"400px"}
          }}
        />
        <CardContent sx={{ bgcolor: "#000", color: "#fff" }}>
          <Box sx={{ margin: "10px" }}>
            <Typography>section</Typography>
          </Box>
          <Box sx={{ margin: "10px" }}>
            <Typography variant={{xs:'h6', sm:"h4", md:"h4", lg:"h4"}} fontWeight="bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              explicabo vel, minima repellat
            </Typography>
          </Box>
          <Box margin= "10px" height= "auto" display={{xs:"none", sm:"inline-block", md:"inline-block", lg:"inline-block"}} >
            <Typography variant="caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, alias est sit incidunt illo ratione corrupti provident
              vitae itaque laudantium corporis enim assumenda id fugit at. Modi
              saepe deleniti ipsam.
            </Typography>
          </Box>
          <Box margin= "10px">
            <Typography fontSize ={{xs:"10px", sm:"12px", md:"14px", lg:"14px"}}>READ MORE</Typography>
          </Box>
          <hr />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "10px",
              width: "100%",
              height: "30px",
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "inline-flex", flexDirection: "row" }}>
              <Button>
                <ArrowBackIos /> <Typography>PREV</Typography>
              </Button>
            </Box>
            <Divider flexItem orientation="vertical" />
            <Box sx={{ display: "inline-flex", flexDirection: "row" }}>
              <Button>
                <Typography>NEXT</Typography>
                <ArrowForwardIosSharp />
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
