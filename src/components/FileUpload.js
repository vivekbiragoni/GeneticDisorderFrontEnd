// src/components/FileUpload.js
import React, { useState } from "react";
import axios from "axios";

const FileUpload = ({ setResults }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL,
        formData,
        {
          headers: {
            "x-api-key": process.env.REACT_APP_API_KEY,
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setResults(response.data);
    } catch (error) {
      setError("Error uploading the file");
      console.error("Error uploading the file", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading || !file}>
        {loading ? "Uploading..." : "Upload"}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FileUpload;
