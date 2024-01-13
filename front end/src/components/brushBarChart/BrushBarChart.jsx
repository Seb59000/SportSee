import './BrushBarChart.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import { daysNumbers, CustomTooltip } from '../../service/format/brushBarTooltip'

function BrushBarChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={180} id="brushBarChart" >
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,

                }}
                maxBarSize={8}
                barGap={"-100"}
            >
                <CartesianGrid strokeDasharray="2 2" vertical={false} />
                <XAxis
                    dataKey={daysNumbers(data)}
                    padding={{ left: -22, right: -22 }}
                    tickLine={false}
                    tickMargin={15}
                />
                <YAxis
                    yAxisId="kg"
                    dataKey="kilogram"
                    domain={["dataMin - 2", "dataMax + 1"]}
                    allowDecimals={false}
                    dx={30}
                    orientation="right"
                    axisLine={false}
                    tickLine={false}
                    tickCount={3}
                />
                <YAxis
                    yAxisId="cal"
                    dataKey="calories"
                    hide={true}
                    orientation="left"
                    axisLine={false}
                    tickLine={false}
                />
                <Tooltip
                    animationEasing="ease-out"
                    content={<CustomTooltip />}
                    offset={40}
                />
                <Bar
                    yAxisId="kg"
                    dataKey="kilogram"
                    fill="#282D30"
                    radius={[10, 10, 0, 0]}
                />
                <Bar
                    yAxisId="cal"
                    dataKey="calories"
                    fill="var(--primary-color)"
                    radius={[10, 10, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}

BrushBarChart.propTypes = {
    data: PropTypes.array
}

export default BrushBarChart;
