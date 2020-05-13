import React from 'react';
import moment from "moment"

import Graph from "./Graph";
import GraphInfo from "./GraphInfo";
import Datepickers from "./Datepickers";
const _ = require("lodash");

class  MainCardGraph extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        upd : 1
	  }
	  this.today = moment(new Date()).format("L");
	  this.originalStartDate = null
	  this.startDate = null;
	  this.originalEndDate = null;
	  this.endDate = null
	  this.newDates = null;
      this.selectDate = this.selectDate.bind(this);
      this.onSelect = this.onSelect.bind(this);
      this.formatDate = this.formatDate.bind(this);
	  this.onSelectEndDate = this.onSelectEndDate.bind(this);
	  this.getFirstDay = this.getFirstDay.bind(this);
	  this.resetData = this.resetData.bind(this);
	  this.getEndDay = this.getEndDay.bind(this);
	  
	}

	shouldComponentUpdate(nextProps, nextState){
		if (nextProps !== this.props ){
			console.log("x");
			this.resetData();
			return true
		} 
		else {
			return true
		}
	}
	
      formatDate(value){
		  console.log(value);
        const nArray= Array.from(value)
			.forEach(elem => 
				elem.Date = moment(elem.Date).format("L")
			);
			const cloned = _.cloneDeep(value);
			cloned.forEach(elem => 
				elem.Date = moment(elem.Date).format("L")
			);
			console.log(cloned, "clon");
          return value;
      }

	  
    onSelect(date){
		 this.startDate = moment(date).format("L")
		console.log(this.startDate, "start date");
		this.newDates = 
			this.props.data.filter(elem  =>  new Date(elem.Date) >=  date);

		this.newDates = this.endDate 
				? this.newDates
					.filter(elem =>  new Date(elem.Date) < new Date(this.endDate)) 
				: this.newDates;
		this.setState({ 
			upd:  1
		});
    }

	onSelectEndDate(date){
		 this.endDate = moment(date).format("L")
		this.newDates = 
			this.props.data.filter(elem  =>  new Date(elem.Date) <=  date);

		this.newDates = this.startDate
			? this.newDates
				.filter(elem => new Date(elem.Date) > new Date (this.startDate)) 
			: this.newDates;
		this.setState({ 
			upd:  1
		}); 
	}

    selectDate(){
		const {data} = this.props;
		if (this.newDates == null){
				const formattedDates = this.formatDate(this.props.data)
			this.originalStartDate = data[0] !== undefined ? data[0].Date : this.today;
			this.originalEndDate = data[0] !== undefined ? data[data.length - 1].Date : this.today;
			return formattedDates;
		} else {
		  console.log(this.newDates);
		  console.log(this.formatDate(this.newDates));
          return this.newDates
      }
	}
	
	getFirstDay(){
		if (this.startDate !== null){
			return this.startDate
		}
		if (this.props.data[0] !== undefined){
			return Date.parse(this.props.data[0].Date)
		}
		else {
			return null
		}
	}

	getEndDay(){
		if (this.endDate !== null){
			return this.endDate
		}
		if (this.props.data[0] !== undefined){
			return Date.parse(this.props.data[this.props.data.length - 1].Date)
		}
		else {
			return moment(this.today).format("L")
		}
	}

resetData(){
	this.originalStartDate = null
	this.startDate = null;
	this.originalEndDate = null;
	this.endDate = null;
	this.newDates = null;
	console.log("resetted")
}
    render() {
		
      const arr= this.selectDate()
	  const firstDay =  this.getFirstDay()
	  const firstDayFormatted = firstDay ?  moment(firstDay).format("L") : this.today;
	  const endDay = this.getEndDay()
	  const endDayFormatted = moment(endDay).format("L") 
      return (
        <div className="main-card-graph-container-super"> 
            <Graph data={arr}/>
			<Datepickers 
				selectStart	= {this.onSelect} 
				selectEnd = {this.onSelectEndDate}  
				firstDay = {firstDay}	
				placeholderStart = {firstDayFormatted}
				placeholderEnd = {endDayFormatted}
			/>
			<GraphInfo
				startDate={this.originalStartDate}
			/>
		</div>
      );
    } 
  };

export default MainCardGraph