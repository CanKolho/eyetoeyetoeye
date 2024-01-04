import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Reveal } from './motion/Reveal';

const FeatureBox = ({ icon, title, description }) => {
  return (
      <Reveal>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
          backgroundColor: 'rgb(254, 252, 243)',
          padding: '2rem',
          maxWidth: '400px',
          borderRadius: '1rem',
          }}>

          <Reveal>
            <Box>
              {icon}
            </Box>
          </Reveal>

          <Reveal>
            <Typography variant='h5' sx={{ mt: '1rem' }}>
              {title}
            </Typography>
          </Reveal>

          <Reveal>
            <Typography variant='body1' sx={{ mt: '2rem', textAlign: 'center' }}>
              {description}
            </Typography>
          </Reveal>
        </Box>
      </Reveal>
    )
}

export default FeatureBox