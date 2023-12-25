import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import { useMediaQuery } from '@mui/material';

import FeatureBox from './FeatureBox';


const features = [
  {
    icon: <PeopleAltTwoToneIcon sx={{ fontSize: '2.5rem' }}/>,
    title: 'Connection',
    description: 'Stay connected with your friends and loved ones, no matter where they are.',
  },
  {
    icon: <TrendingUpTwoToneIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Easy to use',
    description: 'Experience a user-friendly interface that makes navigation and interaction effortless.',
  },
  {
    icon: <SpeedTwoToneIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Fast set up',
    description: 'Get up and running quickly with our fast and efficient setup process.',
  },
]   

const Features = () => { 
  const isMobile = useMediaQuery('(max-width: 900px)')

  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mt: 10,
        mb: 7,
      }}>
        <Box>
          <Typography variant='h5'>
            Our features
          </Typography>
        </Box>
        <Divider sx={{ mt: 2, width: '4rem' }} />  
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '5rem',
          mb: 10,
          mx: isMobile ? 5 : 10,
        }}
      
      >
        {features.map((feature, index) => (
          <FeatureBox 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Box>
    </>
  )
}

export default Features;