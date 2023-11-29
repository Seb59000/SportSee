import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import mock from '../../data/mock.json'
import './SimpleRadarChart.css'

const CustomTick = ({ index, x, y, cx, cy }) => {
    // console.log(x)
    return (
        <text verticalAnchor="middle"
            y={y + (y - cy) / 10}
            // x={x + (x - cx) / 7} 
            x={(x > 100) ? x : x - 70}
            fontSize={15} fill='white'>
            {mock.data.kind[index + 1]}
            {/* {mock.data.kind[index + 1]}x{x} cx{cx} cy{cy} y{y} */}
        </text>
    );
};

function SimpleRadarChart({ data }) {
    console.log(mock.data.kind[1])
    console.log(mock.data.data)
    return (
        <div id="radarChartContainer">
            <ResponsiveContainer width="100%" aspect={1} >
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mock.data.data}>
                    {/* <PolarGrid /> */}
                    <PolarGrid gridType="polygon" radialLines={false} />
                    {/* <PolarGrid gridType="polygon" radialLines={false} polarRadius={[0, 10, 27, 49, 72, 95]} /> */}

                    <PolarAngleAxis dataKey="kind" tick={CustomTick} />
                    {/* <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }}  /> */}
                    <PolarRadiusAxis tick={false} axisLine={false} />
                    <Radar dataKey="value" fill="var(--primary-color)" fillOpacity={0.7} />
                </RadarChart>

            </ResponsiveContainer>
        </div>
    );
}

export default SimpleRadarChart;