import { RadialBarChart, RadialBar, PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';
import mock from '../../data/mock.json'
import './SimpleRadialBarChart.css'

const data2 = [
    { x: mock.data.score * 100, fill: 'var(--primary-color)' },
    // { name: 'B', x: mock.data.score * 100, fill: 'red' },
    // { name: 'C', x: 3, fill: 'aqua' },
    // { name: 'D', x: 4, fill: 'blue' },
    // { name: 'E', x: 5, fill: 'orange' },
    // { name: 'F', x: 6, fill: 'red' },
    // { name: 'G', x: 7, fill: 'black' },
    // { name: 'H', x: 8, fill: 'purple' },
    // { name: 'I', x: 9, fill: 'gray' },
];

const percent = mock.data.score * 100;

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

function SimpleRadialBarChart({ data }) {
    const data2 = [
        { x: data * 100, fill: 'var(--primary-color)' },
        // { name: 'B', x: mock.data.score * 100, fill: 'red' },
        // { name: 'C', x: 3, fill: 'aqua' },
        // { name: 'D', x: 4, fill: 'blue' },
        // { name: 'E', x: 5, fill: 'orange' },
        // { name: 'F', x: 6, fill: 'red' },
        // { name: 'G', x: 7, fill: 'black' },
        // { name: 'H', x: 8, fill: 'purple' },
        // { name: 'I', x: 9, fill: 'gray' },
    ];

    return (
        <div id="test">
            <ResponsiveContainer width="100%" aspect={1} id="radialChart">
                {/* <h2 id="radialChartTitle">Score</h2> */}
                <RadialBarChart width={143} height={143} data={data2}
                    // cx={30 / 2}
                    // cy={30 / 2}
                    innerRadius={100}
                    outerRadius={130}
                    // barSize={10}
                    startAngle={230}
                    endAngle={10}>
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 10]}
                        angleAxisId={0}
                        tick={false}
                    />
                    {/* <text
                        x={100}
                        y={20}
                        textAnchor="top"
                        dominantBaseline="top"
                    >
                        Score
                    </text> */}

                    <RadialBar
                        background
                        dataKey="x"
                        cornerRadius={30 / 2}
                        fill="#0BEFF2"
                    />
                    {/* <text x={170} y={180}>{percent}</text>
                    <text x={190} y={180}>%</text>
                    <text x={170} y={200}>de votre</text>
                    <text x={170} y={220}>objectif</text> */}
                </RadialBarChart>
                {/* <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                    <RadialBar
                        minAngle={15}
                        label={{ position: 'insideStart', fill: '#fff' }}
                        clockWise
                        dataKey="uv"
                        cornerRadius={20}
                    />

                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                </RadialBarChart> */}
            </ResponsiveContainer>
        </div>

    );
}

export default SimpleRadialBarChart;