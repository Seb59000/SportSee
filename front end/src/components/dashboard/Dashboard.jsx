import './Dashboard.css';
import { useParams } from 'react-router-dom'
import BlackDot from '../../assets/Images/BlackDot.png'
import RedDot from '../../assets/Images/RedDot.png'
import energy from '../../assets/Images/energy.svg'
import protein from '../../assets/Images/proteine.svg'
import apple from '../../assets/Images/Apple.png'
import fat from '../../assets/Images/fat.svg'
import BrushBarChart from '../brushBarChart/BrushBarChart'
import SimpleLineChart from '../../components/simpleLineChart/SimpleLineChart'
import SimpleRadarChart from '../../components/simpleRadarChart/SimpleRadarChart'
import SimpleRadialBarChart from '../../components/simpleRadialBarChart/SimpleRadialBarChart'
import ConsoLayout from '../../components/consoLayout/ConsoLayout'
import React, { useState, useEffect } from 'react';
import DataRetriever from '../../service/dataRetriever.jsx';


function Dashboard() {
    const [data, setData] = useState([]);
    let { mock, id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await DataRetriever(mock, id);
            setData(response);
        }
        fetchData();
    }, [id, mock]);

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
                            <h2 id='lineChart-title'>Durée moyenne des <br />sessions</h2>
                            <SimpleLineChart data={data[2] ?? {}} />
                            <SimpleRadarChart data={data[3] ?? []} />
                            <SimpleRadialBarChart data={data[5] ?? 0} />
                        </div>
                    </div>
                    <div id="conso">
                        <ConsoLayout key={1} data={data[6] ?? 0} logo={energy} alt="energy" text1="kCal" text2="Calories" id='energyLogo' />
                        <ConsoLayout key={2} data={data[7]} logo={protein} alt="protéines" text1="g" text2="Protéines" id='proteinLogo' />
                        <ConsoLayout key={3} data={data[8]} logo={apple} alt="glucides" text1="g" text2="Glucides" id='glucidLogo' />
                        <ConsoLayout key={4} data={data[9]} logo={fat} alt="lipides" text1="g" text2="Lipides" id='fatLogo' />
                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;
