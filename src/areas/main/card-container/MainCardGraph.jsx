import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import React from 'react';

class  MainCardGraph extends React.Component {
    render() {
      return (
          <div className="main-card-graph-container"> 
                <div className="chart-header">
                    <h3> Balance</h3>
                    <h3> 2019</h3>
                </div>
        
            <LineChart
              height={450}
              width={900}
              data={this.props.data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <XAxis tickLine={false}  axisLine={{ stroke:  "#0a0051" }} dataKey="Date" />
              <YAxis tickLine={false}  />
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
export default MainCardGraph