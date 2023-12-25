import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Greetings = () => {
  const { t, i18n } = useTranslation();
  const currentLangPrefix = `/${i18n.language}`;
  
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
          {t('greeting.text')}
      </Typography>
      <Link to={`${currentLangPrefix}/about`} style={{ textDecoration: 'none', color: 'white', marginBottom: '1.5rem' }}>
        <Button variant="contained" color="primary">
          {t('greeting.buttonText')}
        </Button>
      </Link>
    </Box>
  );
};

export default Greetings;
