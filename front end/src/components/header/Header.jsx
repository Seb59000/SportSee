import './Header.css';
import logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom'

function Home() {
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
                {/* <button className='main-nav'><Link to="/">Accueil</Link></button>
                <button className='main-nav'>Profil</button>
                <button className='main-nav'>Réglages</button>
                <button className='main-nav'>Communauté</button> */}
            </nav>
        </header>
    );
}

export default Home;
