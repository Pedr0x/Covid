import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import React from 'react';
import DatePicker from "react-datepicker";
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css";


class  MainCardGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upd : 1
    }
    this.startDate = null;
    this.newDates = null
    this.selectDate.bind = this.selectDate.bind(this);
    this.onSelect.bind = this.onSelect.bind(this)

    }

    onSelect(date){
      //this.startDate = value;
      const startDate = moment(date).format("L")
      console.log(startDate, "star date");
       this.newDates = this.props.data.filter( elem  =>  new Date(elem.Date) >=  date );
      console.log(this.newDates, "asd")
      this.setState({ 
        upd:  1
      }) ;
    }

    selectDate(){
      if (this.newDates == null){
        return this.props.data
      } else {
        return this.newDates
      }
    }
  
    render() {
      const arr= this.selectDate()
      console.log(this.props)

      const firstDay = this.props.data[0] ? Date.parse(this.props.data[0].Date) : null
      console.log(firstDay)

      return (
        <div className="main-card-graph-container-super"> 
            <div className="main-card-graph-container"> 
              <LineChart
                height={450}
                width={900}
                data={arr}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <XAxis tickLine={false}  axisLine={{ stroke:  "#0a0051" }} dataKey="Date" />
                <YAxis tickLine={false}  />
                <Tooltip />
                <Legend />
                <Line type="monotone" strokeWidth={2} dataKey="Active" stroke="#ff7d11" activeDot={{ r: 8 }} />
                <Line type="monotone" strokeWidth={2}  dataKey="Recovered" stroke="#007bff" />
                <Line type="monotone" strokeWidth={2}  dataKey="Confirmed" stroke="#ffc107" />
                <Line type="monotone" strokeWidth={2}  dataKey="Deaths" stroke="#dc3545" />
              </LineChart>
          </div>
          <div className="date-filter-container">
          <DatePicker
                minDate={firstDay}
                placeholderText="Select a date"
                maxDate={(new Date())}
                onSelect={(date) =>this.onSelect(date)}
          />
          </div>
        </div>
      );
    } 
  }
export default MainCardGraph