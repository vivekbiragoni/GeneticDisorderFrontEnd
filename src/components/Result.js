// src/components/Results.js
import React from "react";

const Results = ({ results }) => {
  if (!results) return null;

  return (
    <div className="results">
      <h3>Inference Results</h3>
      {results.data.map((result, index) => (
        <div key={index} className="result-item">
          <p>
            <strong>Disorder:</strong> {result.name}
          </p>
          <p>
            <strong>Confidence:</strong>{" "}
            {result.confidence.toFixed(2) * 100 + "%"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Results;
