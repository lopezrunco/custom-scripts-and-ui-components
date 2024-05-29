import { useState } from "react";

import VideoGallery from "./components/VideoGallery";
import Login from "./components/Login";

import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      <div className="content-wrap">
        <div className="home-link">
          <a href="https://ginkgopm.com.uy/" target="_blank" rel="noreferrer">
            <i className="fas fa-home"></i> Volver a Inicio
          </a>
          <div className="separator"></div>
        </div>
        {authenticated ? (
          <VideoGallery />
        ) : (
          <Login onPasswordCorrect={() => setAuthenticated(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
