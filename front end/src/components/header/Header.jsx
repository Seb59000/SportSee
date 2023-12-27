import './Header.css';
import logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <img src={logo} alt="SportSee">
            </img>
            <h1 className='sr-only'>SportSee</h1>
            <nav>
                <Link className='main-nav' to="/">Accueil</Link>
                <Link className='main-nav' to="/profil">Profil</Link>
                <Link className='main-nav' to="/reglage">Réglages</Link>
                <Link className='main-nav' to="/communaute">Communauté</Link>
            </nav>
        </header>
    );
}

export default Header;
