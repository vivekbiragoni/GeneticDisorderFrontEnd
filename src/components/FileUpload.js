import React, { useState } from "react";
import axios from "axios";

const FileUpload = ({ setResults }) => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // State to store the uploaded image URL
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const objectUrl = URL.createObjectURL(selectedFile); // Create object URL for displaying the image
    setImageUrl(objectUrl); // Set the image URL to be displayed
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
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}{" "}
      {/* Render the uploaded image */}
    </div>
  );
};

export default FileUpload;
