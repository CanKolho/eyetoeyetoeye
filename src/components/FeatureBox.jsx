import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FeatureBox = ({ icon, title, description }) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: '#fafafa',
      padding: '2rem',
      maxWidth: '400px',
      borderRadius: '1rem',
    }}>
      <Box>
        {icon}
      </Box>
      <Typography variant='h5' sx={{ mt: '1rem' }}>
        {title}
      </Typography>
      <Typography variant='body1' sx={{ mt: '2rem', textAlign: 'center' }}>
        {description}
      </Typography>
    </Box>
  )
}

export default FeatureBox