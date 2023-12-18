import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Greetings = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      my: 10,
      mx: 3
    }}>
      <Typography 
      wrap="wrap"
      sx={{ 
        fontSize: 25, 
        textAlign: 'center',
        mx: 10,
        mb: 4,
        width: '100%'
      }}>
        We make online communication human and authentic by allowing direct eye contact while looking at your screen.
      </Typography>
      <Link to="/about" style={{ textDecoration: 'none', color: 'white', marginBottom: '1.5rem' }}>
        <Button variant="contained" color="primary">
          About the product
        </Button>
      </Link>
    </Box>
  )
}

export default Greetings;