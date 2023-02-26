import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/plogo-s.png'
import LogoSubtitle from '../../assets/images/nlogo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className='nav-bar' id='nav_bar'>
      <Link className='logo' to='/'>
          <img src={LogoS} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faSuitcase} color="4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a className="links" target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/petri-nurmi-766529235">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a className="links" target="_blank" rel='noreferrer' href="https://github.com/pete874">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
  </div>
)

export default Sidebar
