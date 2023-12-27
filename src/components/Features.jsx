import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import { useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Reveal } from './motion/Reveal';
import FeatureBox from './FeatureBox';  


const Features = () => { 
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 900px)')

  const features = [
    {
      icon: <PeopleAltTwoToneIcon sx={{ fontSize: '2.5rem' }}/>,
      title: t('features.featureBox1.header'),
      description: t('features.featureBox1.text'),
    },
    {
      icon: <TrendingUpTwoToneIcon sx={{ fontSize: '2.5rem' }} />,
      title: t('features.featureBox2.header'),
      description: t('features.featureBox2.text'),
    },
    {
      icon: <SpeedTwoToneIcon sx={{ fontSize: '2.5rem' }} />,
      title: t('features.featureBox3.header'),
      description: t('features.featureBox3.text'),
    },
  ]   

  return (
    <>
      <Reveal>
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
              {t('features.header')}
            </Typography>
          </Box>
          <Divider sx={{ mt: 2, width: '4rem' }} />  
        </Box>
      </Reveal>
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