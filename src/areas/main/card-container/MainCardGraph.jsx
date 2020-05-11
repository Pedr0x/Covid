import React from 'react';
import DatePicker from "react-datepicker";
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css";
import Graph from "./Graph";

class  MainCardGraph extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        upd : 1
      }
      this.startDate = null;
      this.newDates = null
      this.selectDate.bind = this.selectDate.bind(this);
      this.onSelect.bind = this.onSelect.bind(this);
      this.formatDate.bind = this.formatDate.bind(this);
    }
      formatDate(value){
        const nArray= Array.from(value)
			.forEach(elem => 
				elem.Date = moment(elem.Date).format("L")
			);
          console.log(value)
          return value;
      }

    onSelect(date){
		const startDate = moment(date).format("L")
		console.log(startDate, "start date");
		this.newDates = 
			this.props.data.filter(elem  =>  new Date(elem.Date) >=  date );
		console.log(this.newDates)
		this.setState({ 
			upd:  1
		});
    }

    selectDate(){
      if (this.newDates == null){
        return this.formatDate(this.props.data)
      } else {
        return this.newDates
      }
    }
  
    render() {
      const arr= this.selectDate()
      const firstDay = this.props.data[0] ? Date.parse(this.props.data[0].Date) : null
      return (
        <div className="main-card-graph-container-super"> 
            <Graph data={arr}/>
			<div className="date-filter-container">
				<DatePicker
					minDate={firstDay}
					placeholderText="Select a date"
					maxDate={(new Date())}
					onSelect={(date) =>this.onSelect(date)}
			/>
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