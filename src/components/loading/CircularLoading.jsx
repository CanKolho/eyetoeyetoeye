import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const CircularLoading = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      }}>
        <CircularProgress color="secondary" />
    </Box>
  )
}

export default CircularLoading