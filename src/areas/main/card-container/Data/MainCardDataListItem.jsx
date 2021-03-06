import React from 'react';

const MainCardDataListItem = (props) => {
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      };
      
    const Text = () => {
        return(
            <div className="main-card-data-list-item"> 
                <h6 className="main-card-list-item-label">
                    {props.data[0]}: {" "}
                </h6>
                <h6 className="main-card-list-item-data">
                    {props.data[1] && formatNumber(props.data[1]) }
                </h6>
            </div>
        )
    }
    return <Text/>
}

export default MainCardDataListItem