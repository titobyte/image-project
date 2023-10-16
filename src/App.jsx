import reactLogo from './assets/react.svg'
import  { useState } from "react";
import viteLogo from '/vite.svg'
import './App.css'

const API_URL = "http://localhost:5000/";

function App() {
  const [file, setFile] = useState();

  
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`${API_URL}/images`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully!");
      } else {
        throw new Error("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  //previews image on upload
  function handleChange (e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <h1 className="header-text">Image Upload</h1>
      <h2>Upload an image or search for a image</h2>
      <div className="card">
        <input className="image-input" type="text" placeholder="Search"/>
        <input className="image-btn" type="file" onChange={handleChange} accept="image/*"/>
        <button onClick={handleUpload}>Upload</button>
        <img className="uploaded-image" src={file}/>
      </div>
      <p className="read-the-docs">
        Made with Vite and React
      </p>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
