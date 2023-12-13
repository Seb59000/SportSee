import './Home.css';
import Header from '../../components/header/Header'
import SideBar from '../../components/sideBar/SideBar'
import Dashboard from '../../components/dashboard/Dashboard'

function Home({ cas }) {
    return (
        <div>
            < Header />
            <main>
                < SideBar />
                < Dashboard cas={cas} />
            </main>
        </div>
    );
}

export default Home;
