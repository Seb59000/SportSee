import './SimpleLineChart.css';
import mock from '../../data/mock.json'
import { Rectangle, ReferenceArea, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="lineChart-tooltip">
                <p className="tooltip-label">{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
    // return <Rectangle width={80} fill='blue' x={100} y={100} height={100}></Rectangle>
};

const renderLegend = () => {
    return <h2 id='lineChart-title'>Durée moyenne des <br />sessions</h2>
}

const CustomTick = ({ index, x, y }) => {
    switch (index) {
        case 0:
            return (
                <text x={x - 5} y={y + 10} fill='#f0bab4'>
                    L
                </text>
            );
        case 1:
            return (
                <text x={x - 5} y={y + 10} fill='#f0bab4'>
                    M
                </text>
            );
        case 2:
            return (
                <text x={x - 5} y={y + 10} fill='#f0bab4'>
                    M
                </text>
            );
        case 3:
            return (
                <text x={x - 5} y={y + 10} fill='#f0bab4'>
                    J
                </text>
            );
        case 4:
            return (
                <text x={x - 5} y={y + 10} fill='#f0bab4'>
                    V
                </text>
            );
        case 5:
            return (
                <text x={x - 5} y={y + 10} fill='#f0bab4'>
                    S
                </text>
            );
        case 6:
            return (
                <text x={x - 5} y={y + 10} fill='#f0bab4'>
                    D
                </text>
            );
        default:
            break;
    }
};

// function LineCustomTooltip(active) {
//     if (!active.payload) {
//         return null;
//     }
// }

// const CustomizedDot = () => {
//     return (
//         <svg x={10} y={10} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
//             <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
//         </svg>
//     );
// }

const CustomCursor = props => {
    const { x, y, width, height, stroke } = props;
    return <Rectangle fill="blue" stroke="white" x={x} y={y} width={50} height={58} />;
};

function SimpleLineChart() {
    return (

        // <div className="line-chart">
        //     <ResponsiveContainer width="100%" aspect={1} id="simpleBarChart">
        //         <AreaChart
        //             data={mock.data.averageSessions}
        //             margin={{ top: 60, right: 20, left: 20, bottom: 5 }}
        //         >
        //             <defs>
        //                 <linearGradient id="colorMin" x1="0" y1="0" x2="0" y2="1">
        //                     <stop
        //                         offset="5%"
        //                         stopColor="var(--bg-color-tertiary)"
        //                         stopOpacity={0.8}
        //                     />
        //                     <stop
        //                         offset="95%"
        //                         stopColor="var(--color-tertiary)"
        //                         stopOpacity={0}
        //                     />
        //                 </linearGradient>
        //             </defs>
        //             <XAxis
        //                 dataKey="name"
        //                 axisLine={false}
        //                 tickLine={false}
        //                 stroke="var(--color-quaternary)"
        //             // padding={{ left: 0, right: 0 }}
        //             />
        //             <YAxis dataKey="min" hide />
        //             <Area
        //                 type="monotone"
        //                 dataKey="min"
        //                 stroke="var(--color-quaternary)"
        //                 strokeWidth={2}
        //                 fillOpacity={1}
        //                 fill="url(#colorMin)"
        //             />

        //             <Tooltip
        //                 animationEasing="ease-out"
        //                 content={<LineCustomTooltip payload={mock.data.averageSessions} />}
        //                 wrapperStyle={{ outline: "none" }}
        //             />
        //         </AreaChart>
        //     </ResponsiveContainer>
        // </div>

        <div id="simpleBarChartContainer">
            <ResponsiveContainer width="100%" aspect={1} id="simpleBarChart">
                {/* <LineChart width={300} height={100} data={mock.data.averageSessions}>
                    <Legend content={renderLegend} align='right' />
                    <Line type="monotone" dataKey="sessionLength" fill="linear-gradient(180deg, rgba(251,250,255,0.5802696078431373) 0%, rgba(251,251,252,1) 100%, rgba(249,249,249,1) 100%)" strokeWidth={2} dot={false} />
                    <XAxis dataKey="day" tick={<CustomTick />} tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} position={{ y: 0 }} contentStyle={{ backgroundColor: "blue" }} itemStyle={{ color: "green" }} />
                    <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="red" strokeOpacity={0.3} />
                </LineChart> */}
                <LineChart width={500} height={500} data={mock.data.averageSessions}>
                    <defs>
                        <linearGradient id="colorGradiant" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ffffff80" />
                            <stop offset="50%" stopColor="#ffffffbf" />
                            <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                    </defs>
                    <Legend content={renderLegend} verticalAlign="top" />
                    <Line
                        type="bump"
                        dataKey="sessionLength"
                        stroke="url(#colorGradiant)"
                        strokeWidth={5}
                        dot={false}
                    />
                    <XAxis dataKey="day" tick={<CustomTick />} tickLine={false} axisLine={false} />
                    {/* <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} position={{ y: 0 }} /> */}
                    <Tooltip content={<CustomTooltip />} position={{ y: 0 }} />
                    <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="red" strokeOpacity={0.3} />
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
}

export default SimpleLineChart; 
