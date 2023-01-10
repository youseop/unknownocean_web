import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const isIOS = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };

  const userAgent = navigator.userAgent.toLowerCase();
  return (
    <div className="App">
      <h1>unknown ocean</h1>
      {isIOS() && (
        <a
          href="https://apps.apple.com/kr/app/unknown-ocean/id1639595747"
          className="download_btn"
        >
          {"Download App (For IOS)"}
        </a>
      )}

      {`userAgent : ${userAgent}`}

      <a
        href="https://apps.apple.com/kr/app/unknown-ocean/id1639595747"
        className="download_btn"
      >
        {"Download App (test)"}
      </a>
    </div>
  );
}

export default App;
