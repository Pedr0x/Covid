import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import React from 'react';

const MainCardGraph = (props) => {
    return(
        <div className="main-card-graph-container">
            <LineChart width={600} height={300} data={props.data}>
            <Line type="monotone" dataKey="Active" stroke="black" />
            <Line type="monotone" dataKey="Confirmed" stroke="#8884d8" />
            <Line type="monotone" dataKey="Deaths" stroke="red" />
            <Line type="monotone" dataKey="Recovered" stroke="#8884d8" />
            <XAxis />
             <YAxis dataKey="date" />
            </LineChart>
    </div>
    )
}
export default MainCardGraph