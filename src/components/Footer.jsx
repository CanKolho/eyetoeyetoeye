import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { createRouteMapping } from '../utils/utils';

import { Reveal } from './motion/Reveal';

/** FIX ME
 * Pitää muuttaa elementit material ui:ksi 
 * */

const Footer = () => {
  const { t, i18n } = useTranslation();

  const socials = [
    { name: 'facebook', icon: 'fa-brands fa-facebook' },
    { name: 'twitter', icon: 'fa-brands fa-twitter' },
    { name: 'linkedin', icon: 'fa-brands fa-linkedin' },
    { name: 'instagram', icon: 'fa-brands fa-instagram' }
  ]

  const links = [t('nav.home'), t('nav.about'), t('nav.instructions'),t('nav.contact')]

  const routeMapping = createRouteMapping(t, i18n);

  return (
    <footer>
      <ul className="socials">
        {socials.map((social, index) => (
            <li key={index}>
              <Reveal index={index} direction='down'>
                <a href='#'>
                  <i className={social.icon}></i>
                </a>
              </Reveal>
            </li>
        ))}
      </ul>
      <ul className="links">
        {links.map((link, index) => (
            <li key={index}>
              <Reveal index={index+1} direction='down'>
                <Link 
                  key={link} 
                  to={routeMapping[link]}
                >
                  {link}
                </Link>
              </Reveal>
            </li>
        ))}
      </ul>
      <Reveal>
        <p className="legal">© {new Date().getFullYear()} {t('footer.text')}</p>
      </Reveal>
      <Reveal>
        <p className="legal">
        {t('footer.link')} <a href='https://cankolho.github.io/CanKolho-Portfolio/'>Can Kolho</a> 
      </p>
      </Reveal>
      
    </footer>
  )
}

export default Footer