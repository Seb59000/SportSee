import './SimpleLineChart.css';
import { ReferenceArea, LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="lineChart-tooltip">
                <p className="tooltip-label">{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};


const CustomTick = ({ index, x, y }) => {
    switch (index) {
        case 0:
            return (
                <text x={x + 10} y={y + 20} fill='#f0bab4'>
                    L
                </text>
            );
        case 1:
            return (
                <text x={x + 5} y={y + 20} fill='#f0bab4'>
                    M
                </text>
            );
        case 2:
            return (
                <text x={x} y={y + 20} fill='#f0bab4'>
                    M
                </text>
            );
        case 3:
            return (
                <text x={x - 5} y={y + 20} fill='#f0bab4'>
                    J
                </text>
            );
        case 4:
            return (
                <text x={x - 10} y={y + 20} fill='#f0bab4'>
                    V
                </text>
            );
        case 5:
            return (
                <text x={x - 15} y={y + 20} fill='#f0bab4'>
                    S
                </text>
            );
        case 6:
            return (
                <text x={x - 20} y={y + 20} fill='#f0bab4'>
                    D
                </text>
            );
        default:
            break;
    }
};

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
