import logoWhiteImage from './assets/logo-white.png';
import "./Footer.css"

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container grid">
                <img src={logoWhiteImage} alt="logo" className="site-footer-logo"></img>
                <a href="">Facebook</a>
                <a href="">Instagram</a>
            </div>
        </footer>
    );
  }

  export default Footer;