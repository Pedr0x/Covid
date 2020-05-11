import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Graph = (props) => {
    return (
        <div className="main-card-graph-container"> 
              <LineChart
					height={450}
					width={900}
					data={props.data}
					margin={{
					top: 5, right: 30, left: 20, bottom: 5,
					}}
              >
					<XAxis 
						tickLine={false}  
						axisLine={{ stroke:  "#0a0051" }} 
						dataKey="Date" 
					/>
					<YAxis
					 	tickLine={false}  
					/>
             		<Tooltip />
                	<Legend />
					<Line 
						type="monotone" 
						strokeWidth={2} 
						dataKey="Active" 
						stroke="#ff7d11" 
						activeDot={{ r: 8 }} 
					/>
					<Line 
						type="monotone" 
						strokeWidth={2} 
						dataKey="Recovered" 
						stroke="#007bff" 
					/>
					<Line 
						type="monotone" 
						strokeWidth={2}  
						dataKey="Confirmed" 
						stroke="#ffc107" 
					/>
					<Line 
						type="monotone" 
						strokeWidth={2}  
						dataKey="Deaths" 
						stroke="#dc3545" 
					/>
              </LineChart>
          </div>
    )
}

export default Graph