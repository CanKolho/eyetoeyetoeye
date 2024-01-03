import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Features from './Features';
import Greetings from './Greeting';
import Footer from './Footer';

import img from '../assets/home.jpg';

import { Reveal } from './motion/Reveal';
import { useTranslation } from 'react-i18next';

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
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
          <Reveal>
            <Typography 
              variant="h5" 
              sx={{ fontSize: '3rem' }}
            >
              EyeToEyeToEye
            </Typography>
          </Reveal>
          <Reveal index={1}>
            <Typography 
              variant="h3" 
              sx={{ pt: 0.5, fontSize: '1.5rem' }}
            >
              {t('home.text')}
            </Typography>
          </Reveal>
        </Box>
      </Box>
      <Greetings />
      <Features />
      <Footer />
    </>
  );
};

export default Home;