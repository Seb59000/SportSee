import { RadialBarChart, RadialBar, PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';
import mock from '../../data/mock.json'
import './SimpleRadialBarChart.css'

const data = [
    {
        name: '18-24',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: '25-29',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: '30-34',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: '35-39',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },
    {
        name: '40-49',
        uv: 8.63,
        pv: 3908,
        fill: '#a4de6c',
    },
    {
        name: '50+',
        uv: 2.63,
        pv: 4800,
        fill: '#d0ed57',
    },
    {
        name: 'unknow',
        uv: 6.67,
        pv: 4800,
        fill: '#ffc658',
    },
];

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

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

function SimpleRadialBarChart() {
    return (
        <div id="radialChartContainer">
            <ResponsiveContainer width="100%" aspect={1}>
                <h2 id="radialChartTitle">Score</h2>
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
                    <RadialBar
                        background
                        dataKey="x"
                        cornerRadius={30 / 2}
                        fill="#0BEFF2"
                    />
                    <text
                        x={200}
                        y={200}
                        textAnchor="middle"
                        dominantBaseline="middle"
                    // className="progress-label"
                    >
                        Score
                    </text>
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