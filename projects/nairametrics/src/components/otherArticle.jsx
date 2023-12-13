import { Data } from "./data";
import { Paper, Box, Stack, Typography, Button } from "@mui/material";
import { AccessTime, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function OtherArticle() {
  return (
    <>
      <Paper
        sx={{
          m: { md: "30px", xl: "10px", lg: "10px" },
          maxWidth: { lg: "300px", md: "350px", xl: "300px" },
          maxHeight: "570px",
          p: "20px",
        }}
      >
        <Stack
          display="flex"
          flexDirection="row"
          maxWidth="90%"
          bgcolor="#abb8c3"
          height="35px"
          alignItems="center"
          mx=" auto"
        >
          <Box
            bgcolor="#243b93"
            maxWidth="50%"
            height="100%"
            pt="10px"
            px="10px"
            color="#fff"
            fontWeight="bold"
          >
            EXCLUSIVES
          </Box>
          <Box maxWidth="50%"></Box>
        </Stack>

        <Box display="grid" gridTemplateRows="repeat (4 1fr)" gap="10px">
          <Box display="flex" my="20px">
            <Box mx="15px">
              <img src={Data[7].image} alt={Data[6].title} />
            </Box>
            <Box>
              <Box>
                <Typography variant="body2" fontWeight="bold">
                  {Data[7].title}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-end"
              >
                <AccessTime style={{ width: "12px" }} />
                <Typography variant="caption">November 22, 2023</Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box>
              <Typography variant="body2">{Data[10].title}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-end"
            >
              <AccessTime style={{ width: "12px" }} />
              <Typography variant="caption">November 22, 2023</Typography>
            </Box>
          </Box>

          <Box>
            <Box>
              <Typography variant="body2">{Data[11].title}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-end"
            >
              <AccessTime style={{ width: "12px" }} />
              <Typography variant="caption">November 22, 2023</Typography>
            </Box>
          </Box>

          <Box>
            <Box>
              <Typography variant="body2">{Data[12].title}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-end"
            >
              <AccessTime style={{ width: "12px" }} />
              <Typography variant="caption">November 22, 2023</Typography>
            </Box>
          </Box>
        </Box>
        <Stack display="flex" flexDirection="row" gap="10px" mt="15px">
          <Button
            sx={{
              width: "10px",
              bgcolor: "#fff",
              color: "#000",
              height: "30px",
            }}
            variant="contained"
          >
            <ArrowBackIos sx={{ width: "10px" }} />{" "}
            <Typography variant="body2">PREV</Typography>
          </Button>
          <Button
            sx={{
              width: "10px",
              bgcolor: "#fff",
              color: "#000",
              height: "30px",
            }}
            variant="contained"
          >
            {" "}
            <Typography variant="body2">NEXT</Typography>
            <ArrowForwardIos sx={{ width: "10px" }} />
          </Button>
        </Stack>
      </Paper>
    </>
  );
}

{
  /* <Stack spacing={2} sx={{ maxWidth: 20 }}>
      <SnackbarContent message="I love snacks." />
      </Stack> */
}
