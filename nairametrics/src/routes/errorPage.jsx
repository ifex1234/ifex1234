import { useRouteError } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Container sx={{display:"flex", flexDirection:"column",justifyContent:"flex-end", alignItems:"center"}}>
      <Box> <Typography variant="h2"> Oops!</Typography></Box>
      <Typography variant="body1">Sorry, an unexpected error has occurred.</Typography>
      <Typography>
        <i>{error.statusText || error.message}</i>
      </Typography>
    </Container>
  );
}