import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import { Reveal } from './motion/Reveal';

const imgStyle = { width: '100%', height: '100%', borderRadius: '.5rem' }

const AboutBlock = ({ header, text, imgSrc, imgRight }) => {
  const isMobile = useMediaQuery('(max-width: 1100px)')

  return (
      <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '4rem': '5rem',
          mx: isMobile ? 1 : 10,
          mt: 12
        }}>
  
          {/** If true the image is rendered on the left side */}
          {!imgRight &&
            <Box sx={{ flex: 1 }}>
              <Reveal>
              <img src={imgSrc} alt="placeholder" style={imgStyle}/> </Reveal>
            </Box>
          }
            
          <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              flex: 1,
              textAlign: 'center'
            }}>

            <Reveal>
              <Typography sx={{ fontSize: '2.7rem' }}>
                {header}
              </Typography>
              <Divider sx={{ width: isMobile ? '50%' : '30%', mb: 2 }} />
            </Reveal>
            
            <Reveal>
              <Typography sx={{ fontSize: isMobile ? '.95rem' : '1.2rem'}}>
              {text}
            </Typography>
            </Reveal>
          
          </Box>
            
          {/** If true true the image is rendered on the right side */}
          {imgRight && 
            <Box sx={{ flex: 1 }}>
              <Reveal>
                <img src={imgSrc} alt="placeholder" style={imgStyle}/>
              </Reveal>
            </Box>
          }
      </Box>
  )
}

export default AboutBlock