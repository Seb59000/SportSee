import './Dashboard.css';
import BlackDot from '../../assets/Images/BlackDot.png'
import RedDot from '../../assets/Images/RedDot.png'
import energy from '../../assets/Images/energy.svg'
import protein from '../../assets/Images/proteine.svg'
import apple from '../../assets/Images/Apple.png'
import fat from '../../assets/Images/fat.svg'
import mock from '../../data/mock.json'
import data from '../../data/data'
import BrushBarChart from '../brushBarChart/BrushBarChart'
import SimpleLineChart from '../../components/simpleLineChart/SimpleLineChart'
import SimpleRadarChart from '../../components/simpleRadarChart/SimpleRadarChart'
import SimpleRadialBarChart from '../../components/simpleRadialBarChart/SimpleRadialBarChart'
import ConsoLayout from '../../components/consoLayout/ConsoLayout'

function Dashboard() {
    // console.log(data.USER_MAIN_DATA[0].userInfos)
    return (
        <section id='dashboard'>
            <hgroup>
                <h2>Bonjour <span className='red'>{data.USER_MAIN_DATA[0].userInfos.firstName}</span></h2>
                <p id="evaluation">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </hgroup>
            <div id='graphsContainer'>
                <div id='graphs'>
                    <hgroup className='graphHeaderContainer'>
                        <h2 className='graphHeader'>Activité quotidienne</h2>
                        <div className='graphLegend grey'>
                            <img className='dot' src={BlackDot} alt=''></img>
                            <p>
                                Poids (kg)
                            </p>
                            <img className='dot' src={RedDot} alt=''></img>
                            <p>
                                Calories brûlées (kCal)
                            </p>
                        </div>
                    </hgroup>
                    <BrushBarChart data={data.USER_ACTIVITY[0].sessions} />
                    <div id="graphsLayout">
                        <div id="lineChartContainer">
                            <h2 id='lineChart-title'>Durée moyenne des <br />sessions</h2>
                            <SimpleLineChart data={data.USER_AVERAGE_SESSIONS[0]} />
                        </div>
                        <SimpleRadarChart data={data.USER_PERFORMANCE[0].data} />
                        <div id='radialChartContainer'>
                            <h2 id="radialChartTitle">Score</h2>
                            <div id='radialChartText'>
                                <p className='score'>
                                    {data.USER_MAIN_DATA[0].score * 100} %
                                </p>
                                <p className='score-text'>
                                    de votre
                                </p>
                                <p className='score-text'>
                                    objectif
                                </p>
                            </div>

                            <SimpleRadialBarChart data={data.USER_MAIN_DATA[0].score} />
                        </div>

                    </div>
                </div>
                <div id="conso">
                    <ConsoLayout data={mock.data.keyData.calorieCount / 1000} logo={energy} alt="energy" text1="kCal" text2="Calories" id='energyLogo' />
                    <ConsoLayout data={mock.data.keyData.proteinCount} logo={protein} alt="protéines" text1="g" text2="Protéines" id='proteinLogo' />
                    <ConsoLayout data={mock.data.keyData.carbohydrateCount} logo={apple} alt="glucides" text1="g" text2="Glucides" id='glucidLogo' />
                    <ConsoLayout data={mock.data.keyData.carbohydrateCount} logo={fat} alt="lipides" text1="g" text2="Lipides" id='fatLogo' />
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
