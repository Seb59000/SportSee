import Header from '../../components/header/Header'
import SideBar from '../../components/sideBar/SideBar'
import Dashboard from '../../components/dashboard/Dashboard'

function Home() {
    return (
        <div>
            < Header />
            <main>
                < SideBar />
                < Dashboard />
            </main>
        </div>
    );
}

export default Home;
