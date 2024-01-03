import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Reveal } from './motion/Reveal';

import AboutBlock from './AboutBlock';

import img from '../assets/about1.jpg';
import img2 from '../assets/about2.jpg';
import img3 from '../assets/about3.jpg';

const About = () => {
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 1100px)')

  const blocks = [
    {
      header: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgSrc: img,
      imgRight: true
    },
    {
      header: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgSrc: img2,
      // ismobile is used here to make reorder the image and text on mobile
      imgRight: isMobile
    },
    {
      header: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgSrc: img3,
      imgRight: true
    },
  ]

  return (
    <>
      <Stack sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        my: 20,
        mx: isMobile ? 5 : 10,
        }}>

          <Reveal>
            <Typography sx={{ fontSize: '3.5rem' }}>
              {t('about.header')}
            </Typography>
        
            <Divider sx={{ width: '100%' }} />
          </Reveal>
          

          {blocks.map((block, index) => 
            <AboutBlock key={index} {...block} />
          )}
      </Stack>
    </>
  )
}

export default About;

