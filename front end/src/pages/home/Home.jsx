import Header from '../../components/header/Header'
import SideBar from '../../components/sideBar/SideBar'
import Dashboard from '../../components/dashboard/Dashboard'

function Home({ cas, userId }) {
    return (
        <div>
            < Header />
            <main>
                < SideBar />
                < Dashboard cas={cas} userId={userId} />
            </main>
        </div>
    );
}

export default Home;
