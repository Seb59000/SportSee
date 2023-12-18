import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './SimpleRadialBarChart.css'
import PropTypes from 'prop-types';

function SimpleRadialBarChart({ data }) {
    const data2 = [
        { x: data * 10, fill: 'var(--primary-color)' },
    ];

    return (
        <ResponsiveContainer width="100%" aspect={1} id="radialChart" minWidth={210}>
            <RadialBarChart data={data2}
                innerRadius="65%"
                outerRadius="85%"
                startAngle={230}
                endAngle={-230}>
                <PolarAngleAxis
                    type="number"
                    domain={[0, 10]}
                    angleAxisId={0}
                    tick={false}
                />
                <text id='radialChartTitle'
                    x={10}
                    y={20}
                >
                    Score
                </text>

                <RadialBar
                    background={false}
                    dataKey="x"
                    cornerRadius={30 / 2}
                    fill="#0BEFF2"
                />
                <text className='score'
                    x="45%" y="50%"
                    textAnchor="start"
                >{data * 100}</text>
                <text className='score' x="62%" y="50%">%</text>
                <text x="43%" y="60%">de votre</text>
                <text x="43%" y="70%">objectif</text>
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

SimpleRadialBarChart.propTypes = {
    data: PropTypes.number
}

export default SimpleRadialBarChart;