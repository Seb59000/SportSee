import { Radar, Text, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import types from '../../data/types.json'
import './SimpleRadarChart.css'
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PerformanceData from '../../service/dataRetriever';

const CustomTick = ({ index, x, y, cx, cy }) => {
    // console.log(x)
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
            xTransformed = x - 30;

        } else {
            xTransformed = x - 43;
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
    // const [data2, setData] = useState(null);

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await PerformanceData();
    //         setData(response[0]);
    //         // console.log(response[0])
    //     }
    //     fetchData();
    // }, []);
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await axios.get('http://localhost:3000/user/12/performance');
    //         setData(response.data.data.data);
    //         // console.log(response.data)
    //     }
    //     fetchData();
    // }, []);

    // console.log(data)
    // console.log(mock.data.kind[1])
    // console.log(mock.data.data)
    return (
        <div id="radarChartContainer">
            <ResponsiveContainer width={200} height={200} id="radarChart">
                {/* <ResponsiveContainer aspect={1} width="100%" id="radarChart"> */}
                {/* <ResponsiveContainer width="100%" aspect={1} id="radarChart"> */}
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

SimpleRadarChart.propTypes = {
    data: PropTypes.array
}

export default SimpleRadarChart;