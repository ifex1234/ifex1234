import { Box, Typography, CardMedia } from "@mui/material";
import { Comment } from "@mui/icons-material";
import PropTypes from "prop-types";

export default function LatestStories({ title, image, content, author }) {
  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="3fr 1fr"
        width="97%"
        m={{ xs: "20px", sm: "20px", md: "10px", lg: "10px", xl: "10px" }}
      >
        <Box mr="20px">
          <Box>
            {" "}
            <Typography color="#243b93" variant="h5" fontWeight="bold">
              {title}{" "}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            gap="10px"
            my="10px"
          >
            <Typography variant="caption" color="#243b93" fontWeight="bold">
              {" "}
              By {author}
            </Typography>
            <Typography variant="caption">date</Typography>
            <Typography>
              <Comment />
            </Typography>
          </Box>
          <Box
            display={{
              xs: "none",
              sm: "inline-block",
              md: "inline-block",
              lg: "inline-block",
              xl: "inline-block",
            }}
          >
            <Typography variant="body2">{content}</Typography>
          </Box>
        </Box>
        <CardMedia
          image={image}
          alt=""
          sx={{
            width: {
              xs: "200px",
              sm: "258px",
              md: "250px",
              lg: "250px",
              xl: "250px",
            },
            height: "220px",
          }}
        />
      </Box>
    </>
  );
}
LatestStories.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string,
  image: PropTypes.string,
};
