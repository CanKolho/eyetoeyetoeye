import { useField } from '../hooks';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import img from '../assets/team2.avif'

const ContactForm = () => {
  const { t } = useTranslation();

  const { reset: resetName, ...name } = useField('text')
  const { reset: resetEmail, ...email } = useField('email')
  const { reset: resetMessage, ...message } = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()

    resetName()
    resetEmail()
    resetMessage()
  }

  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          overflowX: 'hidden',
          
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            mx: 1.5,
            p: 3,
            border: "1px solid rgb(196, 195, 195)", 
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography variant="h4" align="center" mb={2}>
            {t('contactForm.header')}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              {...name}
              fullWidth
              label={t('contactForm.name')}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              {...email}
              label={t('contactForm.email')}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              {...message}
              label={t('contactForm.message')}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 2,
                display: "block",
                margin: "0 auto",
                backgroundColor: 'rgb(237, 205, 187)', 
                color: 'black', 
                transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'rgb(227, 183, 160)',
                  }
              }}
            >
              {t('contactForm.buttonText')}
            </Button>
          </form>
        </Box>
      </Box>
        </Grid>
      </Grid>
  );
}

export default ContactForm