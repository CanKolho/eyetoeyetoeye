import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Features from './Features';
import Greetings from './Greeting';
import Footer from './Footer';

import img from '../assets/teams.jpg';

import { useTranslation } from 'react-i18next';

//import { styled } from '@mui/material/styles';
//import { blue } from '@mui/material/colors'; // Added missing imports

/**
 * If you want to use your own theme in button, you can use the following code:
 * 
 * const ColorButton = styled(Button)(({ theme }) => ({
   color: theme.palette.getContrastText(blue[300]),
   backgroundColor: blue[300],
   '&:hover': {
     backgroundColor: blue[400],
   },
*/

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(75%)',
  },
};

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.background} />
        <Box sx={{
          zIndex: 1,
          textAlign: 'center',
          color: 'white'
        }}>
          <Typography 
            variant="h5" 
            sx={{ fontSize: '3rem' }}
          >
            EyeToEyeToEye
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ pt: 0.5, fontSize: '1.5rem' }}
          >
            {t('home.text')}
          </Typography>
        </Box>
      </Box>
      <Greetings />
      <Features />
      <Footer />
    </>
  );
};

export default Home;