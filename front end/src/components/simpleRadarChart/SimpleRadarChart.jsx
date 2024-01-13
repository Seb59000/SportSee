import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './SimpleRadarChart.css'
import PropTypes from 'prop-types';
import { CustomTick } from '../../service/format/radarChartTick'

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