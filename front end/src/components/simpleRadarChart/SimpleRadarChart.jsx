import { Radar, Text, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import mock from '../../data/mock.json'
import types from '../../data/types.json'
import './SimpleRadarChart.css'

const CustomTick = ({ index, x, y, cx, cy }) => {
    // console.log(x)
    let xTransformed
    if (x < 60) {
        if (y < 200) {
            xTransformed = x - 50;

        } else {
            xTransformed = x - 45;
        }
    } else if (x >= 50 && x < 270) {
        xTransformed = x - 20;
    } else if (x > 270) {
        if (y < 200) {
            xTransformed = x - 5;

        } else {
            xTransformed = x - 20;
        }
    }

    let yTransformed
    if (y < 100) {
        yTransformed = y - 20;
    } else if (y > 100 && y < 300) {
        yTransformed = y + (y - cy) / 4;
    } else {
        yTransformed = y + 20;
    }

    return (
        <Text verticalAnchor="middle"
            y={yTransformed}
            x={xTransformed}
            fontSize={15} fill='white'>
            {types.type[index]}
        </Text>
    );
};

function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
        <Text
            {...rest}
            verticalAnchor="middle"
            y={y + (y - cy) / 2}
            x={x + (x - cx) / 2}
        >
            {payload.value}
        </Text>
    );
}

function SimpleRadarChart({ data }) {
    // console.log(mock.data.kind[1])
    // console.log(mock.data.data)
    return (
        <div id="radarChartContainer">
            <ResponsiveContainer width="100%" aspect={1} id="radarChart">
                {/* <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}> */}
                <RadarChart data={data}>
                    {/* <PolarGrid /> */}
                    <PolarGrid gridType="polygon" radialLines={false} />
                    {/* <PolarGrid gridType="polygon" radialLines={false} polarRadius={[0, 10, 27, 49, 72, 95]} /> */}

                    <PolarAngleAxis dataKey="kind" tick={CustomTick} />
                    {/* <PolarAngleAxis dataKey="kind" tick={props => renderPolarAngleAxis(props)} /> */}
                    {/* <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }} /> */}
                    <PolarRadiusAxis tick={false} axisLine={false} />
                    <Radar dataKey="value" fill="var(--primary-color)" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SimpleRadarChart;