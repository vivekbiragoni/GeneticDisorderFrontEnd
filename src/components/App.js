// src/App.js

import React, { useState } from "react";
import FileUpload from "./FileUpload";
import Results from "./Result";

const App = () => {
  const [results, setResults] = useState(null);

  return (
    <div>
      <h1>Genetic Disorder Identification</h1>
      <FileUpload setResults={setResults} />
      <Results results={results} />
    </div>
  );
};

export default App;
