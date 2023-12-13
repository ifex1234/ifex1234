import { Box, Paper, Typography } from "@mui/material";
import Slider from "../components/slider";
import Aside from "../components/aside";
import "../App.css";
import BelowSlider from "../components/belowSlider";
import LatestStories from "../components/latestStories";
import { Data } from "../components/data";
import OtherArticle from "../components/otherArticle";
import Ads1 from "../components/ads1";
import Ads2 from "../components/ads2";

function Home() {
  return (
    <>
      <Box
        display="flex"
        flexDirection={{
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        gap="1"
        overflow="hidden"
        boxSizing="border-box"
        m="-10px"
      >
        <Box
          width={{ xs: "97vw", m: "97%vw", md: "65vw", lg: "65vw", xl: "65vw" }}
          m="15px"
        >
          <Paper sx={{ width: "95%", my: "10px" }}>
            <Slider />
          </Paper>
          <Box sx={{ width: "98%", height: "auto", margin: "15px" }}>
            <BelowSlider />
          </Box>
          <Paper sx={{ width: "99%", m: "10px", pt: "20px" }}>
            <Box
              bgcolor="#abb8c3"
              maxWidth="95%"
              height="35px"
              mx="15px"
              color="#fff"
            >
              <Box
                width="22%"
                height="100%"
                bgcolor="#243b93"
                pt="8px"
                pl="8px"
              >
                <Typography variant="body1" fontWeight="bold">
                  LATEST STORIES
                </Typography>
              </Box>
            </Box>
            <Box width="98%" height="auto" margin="5px">
              <LatestStories
                title={Data[0].title}
                content={Data[0].content}
                image={Data[0].image}
                author={Data[0].author}
              />
            </Box>
            <Box width="98%" height="auto" margin="5px">
              <LatestStories
                title={Data[1].title}
                content={Data[1].content}
                image={Data[1].image}
                author={Data[1].author}
              />
            </Box>
            <Box width="98%" height="auto" margin="5px">
              <LatestStories
                title={Data[2].title}
                content={Data[2].content}
                image={Data[2].image}
                author={Data[2].author}
              />
            </Box>
            <Box width="98%" height="auto" margin="5px">
              <LatestStories
                title={Data[3].title}
                content={Data[3].content}
                image={Data[3].image}
                author={Data[3].author}
              />
            </Box>
            <Box width="98%" height="auto" margin="5px">
              <LatestStories
                title={Data[4].title}
                content={Data[4].content}
                image={Data[4].image}
                author={Data[4].author}
              />
            </Box>
          </Paper>
        </Box>

        {/* The beginning of the side bar */}
        <Box
          width={{ xs: "97vw", sm: "97vw", md: "32vw", lg: "32vw", xl: "32vw" }}
          mt="30px"
          ml={{ xs: "10px", sm: "10px", md: "20px", lg: "20px" }}
        >
          <Box mb="20px">
            <Ads1/>
          </Box>
          <Box sx={{ bgcolor: "#bec5ca", margin: "30px 10px", pt: "15px" }}>
            <Box
              sx={{
                bgcolor: "#dd3333",
                mb: "30px",
                mx: "10px",
                height: "35px",
                paddingX: "10px",
                paddingTop: "5px",
                color: "#fff",
              }}
            >
              <Typography fontWeight="bold" fontSize="18px">
                Markets
              </Typography>
            </Box>

            <Box m="10px" height="660px" >
              <Aside />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box m="15px">
        <Ads2/>
        <Ads2/>
      </Box>

      {/* Begining of other articles */}
      <Box display="flex" flexWrap="wrap" margin="15px">
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
        <OtherArticle />
      </Box>
    </>
  );
}

export default Home;
