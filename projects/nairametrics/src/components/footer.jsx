import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { RssFeed, Instagram } from "@mui/icons-material";
import { AccessTime } from "@mui/icons-material";
import { Data } from "./data";

export default function Footer() {
  return (
    <>
      <Box
        minHeight={{xs:"auto", sm:"auto", md:"500px", lg:"500px", xl:"500px"}}
        width="100%"
        bgcolor="#222"
        pt="15px"
        display="flex"
        flexDirection='column'
        mx='15px'
      >
        <Box
          display="flex"
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          height={{xs:"auto", sm:"auto", md:"400px", lg:"400px", xl:"400px"}}
          color="#999"
          borderBottom="2px solid white"
          margin="15px"
          width='100%'
        >
          <Box
            maxHeight={{xs:"200px", sm:"200px", md:"400px", lg:"400px", xl:"400px"}}
            width={{xs:"100%", sm:"100%", md:"100%", lg:"420px", xl:"420px"}}
            display="flex"
            alignContent="flex-start"
            borderRight="1px solid white"
            pt="30px" 
            px={{xs:"10px",sm:"10px"}}
            margin={{xs:"20px", sm:"20px"}}
          >
            Business News | Stock Market | Money Market | Cryptos | Financial
            Literacy | SME |
          </Box>
          <Box
            maxHeight={{xs:"200px", sm:"200px", md:"400px", lg:"400px", xl:"400px"}}
            display="flex"
            flexDirection="column"
            borderRight="1px solid white"
            width={{xs:"100%", sm:"100%", md:"100%", lg:"350px", xl:"350px"}}
            pt="30px"
            px={{xs:"10px",sm:"10px", md:"30px", lg:"30px", xl:"30px"}}
            margin={{xs:"20px", sm:"20px"}}
          >
            <Box>
              <Typography variant="h5">Recent News</Typography>
            </Box>
            <Box>
              <Typography gutterBottom="true" variant="body2">
                {" "}
                “80% of Nigerian startups are incorporated in the U.S.”- Consul
                General
              </Typography>
              <Typography gutterBottom="true" variant="body2">
                {" "}
                Global debt rises to $307 trillion in Q3, 2023
              </Typography>
              <Typography gutterBottom="true" variant="body2">
                Global dividend growth slows in Q3 amid oil and mining sector
                cuts -Report
              </Typography>
            </Box>
          </Box>
          <Box
            maxHeight={{xs:"200px", sm:"200px", md:"400px", lg:"400px", xl:"400px"}}
            width={{xs:"100%", sm:"100%", md:"100%", lg:"220px", xl:"220px"}}
            display="flex"
            flexDirection="column"
            borderRight="1px solid white"
            pt="30px"
            px={{xs:"10px",sm:"10px", md:"30px", lg:"40px", xl:"40px"}}
            margin={{xs:"20px", sm:"20px"}}
          >
            <Typography>Follow us on social media:</Typography>
            <Box display="flex" justifyContent="space-evenly">
              <FacebookIcon sx={{ color: "blue" }} />
              <YouTubeIcon sx={{ color: "blue" }} />
              <TwitterIcon sx={{ color: "blue" }} />
              <RssFeed sx={{ color: "blue" }} />
              <Instagram sx={{ color: "blue" }} />
            </Box>
          </Box>

          <Box
            maxHeight={{xs:"200px", sm:"200px", md:"220", lg:"400px", xl:"400px"}}
            display="flex"
            flexDirection="column"
            width={{xs:"100%", sm:"100%", md:"100%", lg:"250px", xl:"250px"}}
            px={{xs:"10px",sm:"10px", }}
            margin={{xs:"20px", sm:"20px"}}
          >
            <Typography color="#dd3333" fontWeight="bold">
              Recent News
            </Typography>

            <Box display="flex" flexDirection="row">
              <Box width="120px" height="100px" margin="5px">
                <img width="100%" src={Data[13].image} alt={Data[13].title} />
              </Box>
              <Box width="150px" m="5px">
                <Box>{Data[13].title}</Box>
                <Box
                  display="inline-flex"
                  alignItems="flex-end"
                  justifyContent="space-between"
                >
                  <AccessTime style={{ width: "12px" }} />{" "}
                  <Typography variant="caption">November 17, 2023</Typography>{" "}
                </Box>
              </Box>
            </Box>

            <Box></Box>
          </Box>
        </Box>

        <Box
          minHeight="50px"
          display="flex"
          flexDirection={{xs:"column-reverse", sm:"column-reverse", md:"row", lg:"row", xl:"row"}}
          padding="5px"
          justifyContent="space-between"
        >
          <Box m="5px">
            {" "}
            <Typography variant="body2" color="#888">
              © 2023 Nairametrics{" "}
            </Typography>
          </Box>
          <Box m="5px">
            <Typography variant="caption" color="#999" fontWeight="bold">
              Download Nairametrics iOS App / Download Nairametrics Android App
              / Contact Us / Home / Exclusives / Markets / Industries / Economy
              / Business News / Financial Literacy / Opinions
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
