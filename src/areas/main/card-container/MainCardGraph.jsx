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
	  this.today = moment(new Date()).format("L");
	  this.startDate = null;
	  this.endDate = moment(new Date()).format("L");
	  this.newDates = null;
      this.selectDate = this.selectDate.bind(this);
      this.onSelect = this.onSelect.bind(this);
      this.formatDate = this.formatDate.bind(this);
	  this.onSelectEndDate = this.onSelectEndDate.bind(this);
	}
      formatDate(value){
        const nArray= Array.from(value)
			.forEach(elem => 
				elem.Date = moment(elem.Date).format("L")
			);
          return value;
      }

    onSelect(date){
		 this.startDate = moment(date).format("L")
		console.log(this.startDate, "start date");
		this.newDates = 
			this.props.data.filter(elem  =>  new Date(elem.Date) >=  date);
		console.log(this.newDates)
		console.log(this.endDate)
		this.setState({ 
			upd:  1
		});
    }

	onSelectEndDate(date){
		 this.endDate = moment(date).format("L")
		this.newDates = 
			this.props.data.filter(elem  =>  new Date(elem.Date) <=  date);
			this.startDate ? this.newDates.filter(elem => new Date(elem.Date) >= this.startDate ) : console.log("44")

		this.setState({ 
			upd:  1
		}); 
	}

    selectDate(){
      if (this.newDates == null){
        return this.formatDate(this.props.data)
      } else {

		  console.log(this.newDates);
		  console.log(this.formatDate(this.newDates));

        return this.newDates
      }
	}
	
    render() {
		//const today = new Date();
		//const startDatePickerDate = this.startDate;
		const {data} = this.props
      const arr= this.selectDate()
	  const firstDay =  this.props.data[0] ? Date.parse(this.props.data[0].Date) : null;
	  const firstDayFormatted = firstDay ?  moment(firstDay).format("L") : this.today;
	  const endDay = new Date();
	  const endDayFormatted = endDay ? moment(endDay).format("L") : this.today;
      return (
        <div className="main-card-graph-container-super"> 
            <Graph data={arr}/>
			<div className="date-filter-container">
				<div className="datepicker-container"> 
					<h4 className="datepicker-title"> Start Date</h4>
					<DatePicker
						minDate={firstDay}
						placeholderText={ firstDayFormatted}
						maxDate={(new Date())}
						onSelect={(date) =>this.onSelect(date)}
					/>
				</div>
			<div className="datepicker-container"> 
				<h4 className="datepicker-title"> End Date</h4>
				<DatePicker
					minDate={this.startDate}
					placeholderText={endDayFormatted}
					maxDate={(new Date())}
					onSelect={(date) =>this.onSelectEndDate(date)}
				/>
				</div>
          	</div>
        </div>
      );
    } 
  };

export default MainCardGraph