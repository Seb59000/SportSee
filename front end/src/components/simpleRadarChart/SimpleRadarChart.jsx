import { Radar, Text, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import types from '../../data/types.json'
import './SimpleRadarChart.css'
import PropTypes from 'prop-types';

const CustomTick = ({ index, x, y, cx, cy }) => {
    let xTransformed
    if (x < 60) {
        if (y < 200) {
            xTransformed = x - 28;

        } else {
            xTransformed = x - 32;
        }
    } else if (x > 50 && x < 170) {
        xTransformed = x - 20;
    } else if (x > 170) {
        if (y < 100) {
            xTransformed = x - 20;

        } else {
            xTransformed = x - 32;
        }
    }

    let yTransformed
    if (y < 40) {
        yTransformed = y - 10;
    }
    else if (y < 100) {
        yTransformed = y - 20;
    } else if (y >= 100 && y < 180) {
        yTransformed = y + 20;
    } else {
        yTransformed = y + 10;
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

function SimpleRadarChart({ data }) {
    return (
        <ResponsiveContainer width="100%" aspect={1} id="radarChart" minWidth={210}>
            <RadarChart data={data}
                margin={{
                    top: 0,
                    right: 20,
                    left: 20,
                    bottom: 0,
                }}
            >
                <PolarGrid gridType="polygon" radialLines={false} />
                <PolarAngleAxis dataKey="kind" tick={CustomTick} />
                <PolarRadiusAxis tick={false} axisLine={false} />
                <Radar dataKey="value" fill="var(--primary-color)" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

SimpleRadarChart.propTypes = {
    data: PropTypes.array
}

export default SimpleRadarChart;