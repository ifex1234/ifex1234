import { Box, Stack, Typography } from "@mui/material";
import { Data } from "./data";
import { AccessTime } from "@mui/icons-material";

export default function BelowSlider() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "auto",
          flexDirection: {
            sm: "column",
            xs: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "97%", sm: "97%", md: "48%", lg: "48%", xl: "48%" },
            height: "100%",
            marginRight: "10px",
            my:{xs:"20px", sm:"20px"}
          }}
        >
          <Stack sx={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
            <Box mr='10px'>
              <img src={Data[6].image} alt={Data[6].title} />
            </Box>
            <Box
              display="inline-flex"
              justifyContent="space-evenly"
              flexDirection="column"
            >
              {" "}
              <Typography variant="body2" fontWeight="bold">
                {Data[6].title}{" "}
              </Typography>{" "}
              <br /> 
              <Box display="flex" flexDirection='row' alignItems='center' gap={1}>
                <AccessTime sx={{width:"12px"}}/><Typography variant="body2">November 20 2023</Typography>
                </Box>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "97%", sm: "97%", md: "48%", lg: "48%", xl: "48%" },
            height: "100%",
            my:{xs:"20px", sm:"20px"}
          }}
        >
          <Stack sx={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
            <Box mr="10px">
              <img src={Data[7].image} alt={Data[7].title} />
            </Box>
            <Box
              display="inline-flex"
              justifyContent="space-evenly"
              flexDirection="column"
            >
              <Typography variant="body2" fontWeight="bold">
                {Data[7].title}{" "}
              </Typography>{" "}
              <br /> 
              <Box display="flex" flexDirection='row' alignItems='center' gap={1}>
                <AccessTime sx={{width:"12px"}}/><Typography variant="body2">November 20 2023</Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
