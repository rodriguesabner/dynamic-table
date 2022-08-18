import React from 'react';
import DynamicTable from "./DynamicTable";

const Card = () => {
    return (
        <div>
            <h1>Dynamic Table</h1>
            <DynamicTable amount={4} />
        </div>
    );
};

export default Card;
