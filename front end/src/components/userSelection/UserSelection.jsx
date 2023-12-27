import './UserSelection.css';
import { Link } from 'react-router-dom'

function UserSelection({ cas }) {
    if (cas === "mock") {
        return (
            <div id='profil-nav'>
                <h2>Selection du profil</h2>
                <nav>
                    <Link className='profil-nav-btn' to="/mock/0">Karl mocked</Link>
                    <Link className='profil-nav-btn' to="/mock/1">Cecilia mocked</Link>
                </nav>
            </div>

        );
    } else {
        return (
            <div id='profil-nav'>
                <h2>Selection du profil</h2>
                <nav>
                    <Link className='profil-nav-btn' to="/API/12">Karl API</Link>
                    <Link className='profil-nav-btn' to="/API/18">Cecilia API</Link>
                </nav>
            </div>

        );
    }
}

export default UserSelection;
