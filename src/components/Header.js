import logoImage from './assets/logo.png';
import "./Header.css"

function Header() {
    return (
        <header>
            <nav className="container topbar">
                <div className="logo">
                    <img src={logoImage} alt="Little Lemon logo" />
                </div>
                <ul>
                    <li>
                        <a href="">Home</a> 
                    </li>
                    <li>
                        <a href="">About</a> 
                    </li>
                    <li>
                        <a href="">Menu</a> 
                    </li>
                    <li>
                        <a href="">Reservations</a> 
                    </li>
                    <li>
                        <a href="">Order Online</a> 
                    </li>
                    <li>
                        <a href="">Login</a> 
                    </li>
                </ul>
            </nav>
        </header>
    );
  }

  export default Header;