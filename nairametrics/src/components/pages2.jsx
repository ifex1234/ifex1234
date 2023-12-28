import { Card, Paper, Box, Typography, Stack, Button, Badge, Pagination } from "@mui/material";
import { Data } from "../assets/DATA/data/exclusive";
import { AccessTime, Comment } from "@mui/icons-material";
import { useState } from "react";
import PropTypes from "prop-types";
import Paginate from "../components/pagination";

export default function Pages2({ Header, subHeader }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const content = Data.slice(firstPostIndex, lastPostIndex);



  return (
    <Paper
      sx={{
        width: { xs: "95%", sm: "60%", md: "50%", lg: "50%" },
        mx: "auto",
        my: "40px",
        height: "auto",
        bgcolor: "#F5F5F5",
      }}
    >
      <Box m="20px">
        <Typography variant="h4" color="#000">
          {Header}
        </Typography>
        <Typography>{subHeader}</Typography>
      </Box>
      {content.map((items) => (
        <Card
          key={items.id}
          sx={{ display: "flex", flexDirection: "row", bgcolor: "inherit" }}
        >
          <Box
            my="20px"
            width={{ xs: "200px", sm: "300px", md: "300px", lg: "300px" }}
            height={{ xs: "120px", sm: "250px", md: "250px", lg: "250px" }}
          >
            <img
              src={items.image}
              height="100%"
              width="100%"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            width={{ xs: "350px", sm: "350px", md: "400px", lg: "400px" }}
            height={{ xs: "150px", sm: "400px", md: "400px", lg: "400px" }}
            m="10px"
          >
            <Box m="5px">
              <Typography variant="body1" fontWeight="bold" textAlign="justify">
                {items.title}
              </Typography>{" "}
            </Box>
            <Stack spacing={8} useFlexGap m="10px">
              <Box
                display="flex"
                flexDirection={{
                  xs: "column",
                  sm: "col",
                  md: "row",
                  lg: "row",
                }}
                alignItems="flex-start"
                gap={1}
              >
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ fontSize: { xs: "10px" } }}
                  >
                    By{" "}
                  </Typography>
                  <Typography
                    color="blue"
                    variant="caption"
                    sx={{ fontSize: { xs: "12px" } }}
                  >
                    {items.author}
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="flex-end"
                  gap={1}
                >
                  <AccessTime sx={{ width: { xs: "12px", sm: "15px" } }} />
                  <Typography
                    variant="caption"
                    sx={{ fontSize: { xs: "10px" } }}
                  >
                    {" "}
                    November 26, 223
                  </Typography>
                  <Box
                    display={{
                      xs: "none",
                      sm: "inline-block",
                      md: "inline-block",
                      lg: "inline-block",
                    }}
                  >
                    <Comment sx={{ width: "15px" }} />
                  </Box>
                </Box>
              </Box>
            </Stack>
            <Box
              m="5px"
              display={{
                xs: "none",
                sm: "inline-block",
                md: "inline-block",
                lg: "inline-block",
              }}
            >
              <Typography>{items.content.slice(1, 200)}...</Typography>
            </Box>
            <Box
              m="5px"
              display={{
                xs: "none",
                sm: "inline-block",
                md: "inline-block",
                lg: "inline-block",
              }}
            >
              <Button variant="contained" color="inherit">
                Read More
              </Button>
            </Box>
          </Box>
        </Card>
      ))}
      <Stack spacing={2} margin="20px">
        <Paginate
          totalPost={Data.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
        <Badge>{Data.length}</Badge>

      </Stack>
      <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(Data.length / postPerPage)}
            page={currentPage}
            onChange={setCurrentPage}
            size="large"
          />


    </Paper>
  );
}
Pages2.propTypes = {
  Header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
};
