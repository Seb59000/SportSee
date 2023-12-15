import './Dashboard.css';
import BlackDot from '../../assets/Images/BlackDot.png'
import RedDot from '../../assets/Images/RedDot.png'
import energy from '../../assets/Images/energy.svg'
import protein from '../../assets/Images/proteine.svg'
import apple from '../../assets/Images/Apple.png'
import fat from '../../assets/Images/fat.svg'
import dataMocked from '../../data/data'
import BrushBarChart from '../brushBarChart/BrushBarChart'
import SimpleLineChart from '../../components/simpleLineChart/SimpleLineChart'
import SimpleRadarChart from '../../components/simpleRadarChart/SimpleRadarChart'
import SimpleRadialBarChart from '../../components/simpleRadialBarChart/SimpleRadialBarChart'
import ConsoLayout from '../../components/consoLayout/ConsoLayout'
// import useEffect from 'react';
import React, { useState, useEffect } from 'react';
import DataRetriever from '../../service/dataRetriever.jsx';


function Dashboard({ cas }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await DataRetriever(cas);
            setData(response);
            // console.log(response)
        }
        fetchData();
    }, [cas]);
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await axios.get('http://localhost:3000/user/12/performance');
    //         setData(response.data.data.data);
    //         // console.log(response.data)
    //     }
    //     fetchData();
    // }, []);


    // useEffect(() => {
    //     async function getUser() {
    //         let response
    //         try {
    //             response = await axios.get('http://localhost:3000/user/12/performance');
    //             // console.log(response.data.data.data);
    //             // console.log(data.USER_PERFORMANCE[0].data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //         return response.data.data.data
    //     }
    // }, []);

    // let userPerfs

    // switch (cas) {
    //     case 1:
    //         userPerfs = dataMocked.USER_PERFORMANCE[0].data
    //         break;
    //     case 2:
    //         userPerfs = dataMocked.USER_PERFORMANCE[1].data
    //         break;
    //     case 3:
    //         // userPerfs = data.data.data.data
    //         // userPerfs = getUser()
    //         break;
    //     default:
    //         break;
    // }
    // console.log(cas)
    // console.log(data.USER_MAIN_DATA[0].userInfos)
    if (data === undefined) {
        return (
            <section id='dashboard'>
            </section>
        )
    } else {
        return (
            <section id='dashboard'>
                <hgroup>
                    <h2>Bonjour <span className='red'>{data[0]}</span></h2>
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
                        <BrushBarChart data={data[1] ?? []} />
                        <div id="graphsLayout">
                            <div id="lineChartContainer">
                                <h2 id='lineChart-title'>Durée moyenne des <br />sessions</h2>
                                <SimpleLineChart data={data[2] ?? {}} />
                            </div>
                            <SimpleRadarChart data={data[3] ?? []} />
                            <div id='radialChartContainer'>
                                <h2 id="radialChartTitle">Score</h2>
                                <div id='radialChartText'>
                                    <p className='score'>
                                        {data[4] ?? []} %
                                    </p>
                                    <p className='score-text'>
                                        de votre
                                    </p>
                                    <p className='score-text'>
                                        objectif
                                    </p>
                                </div>

                                <SimpleRadialBarChart data={data[5] ?? 0} />
                            </div>

                        </div>
                    </div>
                    <div id="conso">
                        <ConsoLayout key={1} data={data[6] ?? 0} logo={energy} alt="energy" text1="kCal" text2="Calories" id='energyLogo' />
                        <ConsoLayout key={2} data={data[7] ?? []} logo={protein} alt="protéines" text1="g" text2="Protéines" id='proteinLogo' />
                        <ConsoLayout key={3} data={data[8] ?? []} logo={apple} alt="glucides" text1="g" text2="Glucides" id='glucidLogo' />
                        <ConsoLayout key={4} data={data[9] ?? []} logo={fat} alt="lipides" text1="g" text2="Lipides" id='fatLogo' />
                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;
