import './Header.css';
import logo from '../../assets/Images/logo.png'

function Home() {
    return (
        <header>
            <img src={logo} alt="SportSee">
            </img>
            <h1 className='sr-only'>SportSee</h1>
            <nav>
                <button>Accueil</button>
                <button>Profil</button>
                <button>Réglages</button>
                <button>Communauté</button>
            </nav>
        </header>
    );
}

export default Home;
