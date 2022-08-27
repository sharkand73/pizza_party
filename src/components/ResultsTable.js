import React from "react";

const ResultsTable = ({ results }) => {
    return (
        <div className='results-table'>
            <div className='row'>
                <div className='col1'>Flour:</div>
                <div className='col2'>{`${results.flourWeight}g`}</div>
            </div>
            <div className='row'>
                <div className='col1'>Water:</div>
                <div className='col2'>{`${results.waterWeight}g`}</div>
            </div>
            <div className='row'>
                <div className='col1'>Yeast:</div>
                <div className='col2'>{`${results.yeastWeight}g`}</div>
            </div>
            <div className='row'>
                <div className='col1'>Salt:</div>
                <div className='col2'>{`${results.saltWeight}g`}</div>
            </div>
            <div className='row'>
                <div className='col1'>Oil:</div>
                <div className='col2'>{`${results.oilWeight}g`}</div>
            </div>
        </div>  
    )
}

export default ResultsTable;