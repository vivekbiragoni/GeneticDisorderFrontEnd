// src/components/Results.js
import React from 'react';

const Results = ({ results }) => {
    if (!results) return null;

    return (
        <div>
            <h3>Inference Results</h3>
            <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
    );
};

export default Results;
