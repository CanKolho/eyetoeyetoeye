import '../styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  const socials = [
    { name: 'facebook', icon: 'fa-brands fa-facebook' },
    { name: 'twitter', icon: 'fa-brands fa-twitter' },
    { name: 'linkedin', icon: 'fa-brands fa-linkedin' },
    { name: 'instagram', icon: 'fa-brands fa-instagram' }
  ]

  const links = ['Home', 'About', 'Instructions', 'Contact']

  return (
    <footer>
      <ul className="socials">
        {socials.map((social, index) => (
          <li key={index}>
            <a href='#'>
              <i className={social.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <ul className="links">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              key={link} 
              to={link.toLowerCase() === 'home' ? '/' : link.toLowerCase()}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <p className="legal">© {new Date().getFullYear()} All rights reserved</p>
      <p className="legal">
        Website created by <a href='https://cankolho.github.io/CanKolho-Portfolio/'>Can Kolho</a> 
      </p>
    </footer>
  )
}

export default Footer