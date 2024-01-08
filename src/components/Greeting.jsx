import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';
import { Reveal } from './motion/Reveal';

const Greetings = () => {
  const { t, i18n } = useTranslation();
  const currentLangPrefix = `/${i18n.language}`;

  const theme = useTheme();
  
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      my: 10,
      mx: 3
      }}>
        
      <Reveal>
        <Typography 
          wrap="wrap"
          sx={{ 
            fontSize: 25, 
            textAlign: 'center',
            mb: 4,
            width: '100%'
          }}>
            {t('greeting.text')}
          </Typography>
      </Reveal>
      <Reveal>
        <Link to={`${currentLangPrefix}/about`} style={{ textDecoration: 'none', color: 'white', marginBottom: '1.5rem' }}>
          <Button 
            variant="contained"  
            sx={{ 
              backgroundColor: theme.palette.secondary.medium, 
              color: 'black', 
              transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                },
            }}>
              {t('greeting.buttonText')}
          </Button>
        </Link> 
      </Reveal>
    </Box>
  );
};

export default Greetings;
