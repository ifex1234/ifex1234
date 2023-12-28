import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider, { sliderClasses } from "@mui/material/Slider";

const finalTheme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        valueLabel: ({ ownerState, theme }) => ({
          ...(ownerState.orientation === "vertical" && {
            backgroundColor: "transparent",
            color: theme.palette.grey[500],
            fontWeight: 700,
            padding: 0,
            left: "3rem",
          }),
          [`&.${sliderClasses.valueLabelOpen}`]: {
            transform: "none",
            top: "initial",
          },
        }),
      },
    },
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function GlobalThemeOverrideCallback() {
  return (
    <ThemeProvider theme={finalTheme}>
      <Box sx={{ height: 180, display: "inline-block" }}>
        <Slider
          getAriaLabel={() => "Temperature"}
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={[25, 50]}
          marks={[
            { value: 0 },
            { value: 25 },
            { value: 50 },
            { value: 75 },
            { value: 100 },
          ]}
          valueLabelFormat={valuetext}
          valueLabelDisplay="on"
        />
      </Box>
    </ThemeProvider>
  );
}

// You can use the variants key in the theme's components section to create new variants to Material UI components. These new variants can specify what styles the component should have when that specific variant prop value is applied
// The definitions are specified in an array, under the component's name. For each of them a CSS class is added to the HTML <head>. The order is important, so make sure that the styles that should win are specified last.

const theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'dashed' },
            style: {
              textTransform: 'none',
              border: `2px dashed ${blue[500]}`,
            },
          },
          {
            props: { variant: 'dashed', color: 'secondary' },
            style: {
              border: `4px dashed ${red[500]}`,
            },
          },
        ],
      },
    },
  });

  <ThemeProvider theme={theme}>
  <Button variant="dashed" sx={{ m: 1 }}>
    Dashed
  </Button>
  <Button variant="dashed" color="secondary" sx={{ m: 1 }}>
    Secondary
  </Button>
  <Button variant="dashed" size="large" sx={{ m: 1 }}>
    Large
  </Button>
  <Button variant="dashed" color="secondary" size="large" sx={{ m: 1 }}>
    Secondary large
  </Button>
</ThemeProvider>


// Another way to override the look of all component instances is to adjust the theme configuration variables.

import Button from '@mui/material/Button';

const theme2 = createTheme({
  typography: {
    button: {
      fontSize: '1rem',
    },
  },
});

export  function ThemeVariables() {
  return (
    <ThemeProvider theme={theme2}>
      <Button>font-size: 1rem</Button>
    </ThemeProvider>
  );
}