import React from 'react';

const GraphInfo = (props) => {
    return(
        <div className="graph-info">
	        <div className="graph-info-item">
				<h5 className="graph-info-title">
				    First Known Case: {" "}
				</h5>
				<h5 className="graph-info-data">
				    {props.startDate ? props.startDate : null}
				</h5>
			</div>
		</div>
	)
};

export default GraphInfo