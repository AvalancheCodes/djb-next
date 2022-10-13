import React from 'react';

const Day = ({day, classList}) => {
    return (
        <>
            <button className={classList}>
                <span>{day}</span>
            </button>
        </>
    );
};

export default Day;