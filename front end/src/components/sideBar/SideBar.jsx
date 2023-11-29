import './SideBar.css';
import yoga from '../../assets/Images/Yoga.png'
import swim from '../../assets/Images/Swim.png'
import cycle from '../../assets/Images/Cycle.png'
import alter from '../../assets/Images/Alter.png'

function SideBar() {
    return (
        <div id='sideBar'>
            <nav>
                <ul>
                    <li><button><img src={yoga} alt='relax'></img></button></li>
                    <li><button><img src={swim} alt='natation'></img></button></li>
                    <li><button><img src={cycle} alt='vélo'></img></button></li>
                    <li><button><img src={alter} alt='musculation'></img></button></li>
                </ul>




            </nav>
            <div id='copyright'>Copyright, SportSee 2020</div>
        </div>
    );
}

export default SideBar;
