import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
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


class  Example extends React.Component {
    render() {
      return (
          <div className="chart-container"> 
                <div className="chart-header">
                    <h3> Balance</h3>
                    <h3> 2019</h3>
                </div>
        
            <LineChart
              height={300}
              width={500}
              data={this.props.data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <XAxis tickLine={false}  axisLine={{ stroke:  "#0a0051" }} dataKey="Date" />
              <YAxis tickLine={false}  axisLine={false}  />
              <Tooltip />
              <Legend />
              <Line type="monotone" strokeWidth={2} dataKey="Active" stroke="#45E5FB" activeDot={{ r: 8 }} />
              <Line type="monotone" strokeWidth={2}  dataKey="Recovered" stroke="#DD5F82" />
              <Line type="monotone" strokeWidth={2}  dataKey="Confirmed" stroke="purple" />
              <Line type="monotone" strokeWidth={2}  dataKey="Deaths" stroke="red" />
  
            </LineChart>
        </div>
      );
    }
  }
export default Example