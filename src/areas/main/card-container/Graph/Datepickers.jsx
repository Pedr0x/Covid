import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Datepickers = (props) => {
    const firstDay = Date.parse(props.firstDay)
    return(
        <div className="date-filter-container">
            <div className="datepicker-container"> 
                <h4 className="datepicker-title"> Chart Start Date</h4>
                    <DatePicker
                        minDate={Date.parse(props.originalFirstDay)}
                        placeholderText={ props.placeholderStart}
                        maxDate={(new Date())}
                        onSelect={(date) =>props.selectStart(date)}
                    />
                </div>
            <div className="datepicker-container"> 
                <h4 className="datepicker-title"> Chart End Date</h4>
                <DatePicker
                    minDate={firstDay}
                    placeholderText={props.placeholderEnd}
                    maxDate={(new Date())}
                    onSelect={(date) =>props.selectEnd(date)}
                />
                </div>
        </div>
    )
}

export default Datepickers