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

	shouldComponentUpdate(nextProps){
		if (nextProps !== this.props ){
			this.resetData();
			return true
		} 
		else {
			return true
		}
	}
	
      formatDate(value){
		const cloned = _.cloneDeep(value);
		cloned.forEach(elem => 
			elem.Date = moment(elem.Date).format("L")
		);
		return cloned;
      }

    onSelect(date){
		const {data} = this.props;
		this.startDate = date
		this.newDates = data.filter(elem  =>   new Date(elem.Date) > date);
		this.newDates = this.endDate 
				? this.newDates
					.filter(elem =>  new Date(elem.Date) <= this.endDate)
				: this.newDates;
		this.setState({ 
			upd:  1
		});
    }

	onSelectEndDate(date){
		this.endDate = date
		this.newDates = 
			this.props.data.filter(elem  =>  new Date(elem.Date) <=  date);
		this.newDates = this.startDate
			? this.newDates
				.filter(elem => new Date(elem.Date) > this.startDate) 
			: this.newDates;
		this.setState({ 
			upd:  1
		}); 
	}

    selectDate(){
		const {data} = this.props;
		if (!this.newDates){
				const formattedDates = this.formatDate(this.props.data);
				this.originalStartDate = data[0] ? data[0].Date : this.today;
				this.originalEndDate = data[0] !== undefined ? data[data.length - 1].Date : this.today;
				return formattedDates;
		} else {
          return this.formatDate(this.newDates);
      }
	}
	
	getFirstDay(){
		if (this.startDate !== null){
			return this.startDate
		}
		if (this.props.data[0] !== undefined){
			return moment(this.props.data[0].Date).format("L")
		}
		return null
	
	}

	getEndDay(){
		if (this.endDate){
			return (moment(this.endDate).format("L"))
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
}
    render() {
		const formattedData = this.selectDate();
		const firstDay =  this.getFirstDay();
		const firstDayFormatted = firstDay ?  moment(firstDay).format("L") : this.today;
		const endDay = this.getEndDay();
		const endDayFormatted = moment(endDay).format("L");
		return (
    		<div className="main-card-graph-container-super"> 
				<Graph data={formattedData}/>
				<Datepickers 
					originalFirstDay = {this.originalStartDate || this.today}
					selectStart	= {this.onSelect} 
					selectEnd = {this.onSelectEndDate}  
					firstDay = {firstDay}	
					placeholderStart = {firstDayFormatted}
					placeholderEnd = {endDayFormatted}
				/>
				<GraphInfo
					startDate={moment(this.originalStartDate).format("L")}
				/>
			</div>
      );
    } 
  };

export default MainCardGraph