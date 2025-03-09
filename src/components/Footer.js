import logoWhiteImage from './assets/logo-white.png';
import "./Footer.css"
import {
    faInstagram,
    faFacebook,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [
    {
      icon: faFacebook,
      url: "http://facebook.com",
      name: "Facebook"
    },
    {
      icon: faInstagram,
      url: "https://instagram.com",
      name: "Instagram"
    }
  ];

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container grid">
                <img src={logoWhiteImage} alt="logo" className="site-footer-logo"></img>
                {socials.map(act => {
                    return <a href={act.url} key={ act.icon }><FontAwesomeIcon icon={act.icon} size="2x" title="semmi"/></a>})
                }
            </div>
        </footer>
    );
  }

  export default Footer;