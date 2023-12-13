import PropTypes from "prop-types";
import { createTheme, ThemeProvider, Button } from "@mui/material";

function Articles({title, image, content, author}) {
  return (
    <>
    <div>{title}</div>
    <div>{image}</div>
    <div>{content}</div>
    <div>{author}</div>
    </>
  )
}

export default Articles;

Articles.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.element,
    content: PropTypes.string,
    author: PropTypes.string
}

const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
        },
      },
    },
  },
});

<ThemeProvider theme={theme}>
  <Button>font-size: 1rem</Button>
</ThemeProvider>