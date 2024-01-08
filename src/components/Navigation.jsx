import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { createRouteMapping, languages } from '../utils/utils';

import { useTheme } from '@emotion/react';

import { Reveal } from './motion/Reveal';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const drawerWidth = 240;

const Navigation = (props) => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('');
  const theme = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  
  /**
   * Handles the change event of the language select input.
   * Updates the language state and navigates to the new URL with the language prefix.
   *
   * @param {object} event - The change event object.
   */
  const handleLangChange = (event) => {
    const newLang = event.target.value;
    //The language change is taken care of by the i18n library and useEffect hook
    //setLang(newLang);

    const { pathname } = location;

    // URLs are structured like /:lang/some-path
    const newPath = pathname.split('/').slice(2).join('/'); // Removes the language part
    const newUrl = `/${newLang}/${newPath}`; // Adds the new language prefix

    navigate(newUrl); // Navigate to the new URL with language prefix
  };

  /**
   * Array of navigation items.
   */
  const navItems = [t('nav.home'), t('nav.about'), t('nav.instructions'),t('nav.contact')];

  /**
   * Mapping of routes.
   *
   * @type {Object}
   */
  const routeMapping = createRouteMapping(t, i18n);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EyeToEyeToEye
      </Typography>
      <Divider />
      <List>

      {navItems.map((item) => (
          <Link key={item} to={routeMapping[item]} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}

        <ListItem disableGutters sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FormControl sx={{ width: '30%' }}>
            <Select
              value={lang}
              onChange={handleLangChange}
            >
              {languages.map((item, index) => (
                <MenuItem
                  key={index}
                  value={item.code}
                  onClick={() => i18n.changeLanguage(item.code)}
                >
                  {item.code}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" 
      sx={{
        backgroundColor: theme.palette.primary.light,
        backdropFilter: "blur(100px)",
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
          >
            <Reveal direction='down'>
              <MenuIcon />
            </Reveal>
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: 'black' } }}
          >
            EyeToEyeToEye
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link key={item} to={routeMapping[item]} style={{ textDecoration: 'none', color: 'black' }}>
                <Button sx={{ color: 'black', whiteSpace: 'nowrap' }}>
                  {item}
                </Button>
              </Link>
            ))}

            <FormControl sx={{ width: '20%' }}>
              <Select
                value={lang}
                onChange={handleLangChange}
              >
                {languages.map((item, index) => (
                  <MenuItem key={index} value={item.code} onClick={() => i18n.changeLanguage(item.code)}>
                    {item.code}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navigation;