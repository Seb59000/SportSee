import './SimpleLineChart.css';
import { ReferenceArea, LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CustomTooltip, CustomTick } from '../../service/format/lineChartTooltip'
import PropTypes from 'prop-types';

function SimpleLineChart({ data }) {
    return (
        <ResponsiveContainer width="100%" aspect={1} minWidth={210} id="simpleLineChart">
            <LineChart data={data.sessions}
                margin={{
                    top: 20,
                    right: 0,
                    left: 10,
                    bottom: 15,
                }}
            >
                <defs>
                    <linearGradient id="colorGradiant" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffffff80" />
                        <stop offset="50%" stopColor="#ffffffbf" />
                        <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                </defs>
                <Line
                    type="bump"
                    dataKey="sessionLength"
                    stroke="url(#colorGradiant)"
                    strokeWidth={5}
                    dot={false}
                />
                <XAxis dataKey="day" tick={<CustomTick />} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} position={{ y: 0 }} />
                <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="red" strokeOpacity={0.3} />
            </LineChart>
        </ResponsiveContainer>
    );
}

SimpleLineChart.propTypes = {
    data: PropTypes.object
}

export default SimpleLineChart; 
