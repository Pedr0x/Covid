import React from 'react';

const MainCardDataListItem = (props) => {
    //fix this into an object 
    const Text = () => {
        return(
        <div className="main-card-data-list-item"> 
                    <h6 className="main-card-list-item-label">
                        {props.data[0]}: {" "}
                    </h6>
                    <h6 className="main-card-list-item-data">
                        {props.data[1]}
                    </h6>
                </div>
        )
    }
    if (props.data){
        return <Text/>
    } else {
        return null
    }
}

export default MainCardDataListItem