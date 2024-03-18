import React from "react";
import "../styles/main-window.css";
function Info({ ipInfo }) {
  return (
    <div className="search-result-box">
      {Object.keys(ipInfo).map((key, i) => (
        <div key={i} className="info-box">
          <div className="info-title">{key}</div>
          <div className="info">{ipInfo[key]}</div>
        </div>
      ))}
    </div>
  );
}

export default Info;
