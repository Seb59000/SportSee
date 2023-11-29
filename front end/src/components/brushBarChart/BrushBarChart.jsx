import './BrushBarChart.css';
import {
    BarChart,
    Bar,
    ReferenceLine,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip">
                <p className="tooltip-label">{`${payload[0].value}Kg`}</p>
                <p className="tooltip-label">{`${payload[1].value}Kcal`}</p>
            </div>
        );
    }
    return null;
};

const CustomTick = ({ index, x, y }) => {
    return (
        <text x={x - 5} y={y + 20}>
            {index + 1}
        </text>
    );
};

function BrushBarChart({ data }) {

    // console.log(data)
    const dataFormatted = data.map(function (item) {
        // item.calories = item.calories * 10
        return item;
    });
    // console.log(dataFormatted)
    return (
        <div id="brushBarChart">
            {/* <ResponsiveContainer width={820} height={300} id="brushBarChart"> */}
            <ResponsiveContainer maxHeight={400} width="100%" aspect={3} >
                {/* {console.log(mock.data.averageSessions)} */}
                <BarChart
                    // width={820}
                    // height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="2 2"
                        vertical={false}
                    />
                    <XAxis tickLine={false} tick={<CustomTick />} />
                    <YAxis orientation='right' axisLine={false} tickLine={false} tickCount={4} type="number" data="kilogram" domain={[69, 'auto']} />
                    <Tooltip
                        animationEasing="ease-out"
                        content={<CustomTooltip />}
                        offset={40}
                    />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
                    <Bar dataKey="calories" fill="var(--primary-color)" barSize={10} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BrushBarChart;