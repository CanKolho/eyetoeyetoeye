import createTheme from '@mui/material/styles/createTheme';

const mutedGreen = {
  main: '#88AB8E',
  light: 'rgba(208, 231, 210, 0.9)',
}

const lightGreen = {
  main: '#E5F4E7',
  light: '#F1FDF3',
  medium: '#D1E9D2',
  dark: '#99CDA9',
}

/**
 * Represents the theme configuration object.
 */
const theme = createTheme({
  palette: {
    primary: mutedGreen,
    secondary: lightGreen,
  },
});

export default theme;