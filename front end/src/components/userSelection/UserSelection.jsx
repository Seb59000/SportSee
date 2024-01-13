import './UserSelection.css';
import { Link } from 'react-router-dom'

function UserSelection() {
    return (
        <div id='profil-nav'>
            <h2>Selection des données d'utilisateur</h2>
            <nav>
                <Link className='profil-nav-btn' to="/mock/0">Karl données mocked</Link>
                <Link className='profil-nav-btn' to="/mock/1">Cecilia données mocked</Link>
                <Link className='profil-nav-btn' to="/API/12">Karl données API</Link>
                <Link className='profil-nav-btn' to="/API/18">Cecilia données API</Link>
            </nav>
        </div>

    );
}

export default UserSelection;
