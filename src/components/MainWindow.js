import React, { useState } from "react";
import "../styles/main-window.css";
import SearchInput from "./SearchInput";
import Map from "./Map";
import Info from "./Info";

const initialData = {
  info: {
    "IP ADDRESS": "",
    LOCATION: "",
    TIMEZONE: "",
    ISP: "",
  },
  position: [51.505, -0.09],
  error: false,
};

function MainWindow() {
  const [ipInfo, setIpInfo] = useState(initialData);
  const [ip, setIp] = useState({ ipNum: "" });

  function handleChange(e) {
    setIp({ ...ip, ipNum: e.target.value });
  }

  async function handleClick() {
    try {
      const ipInfoResponse = await fetch(
        `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_fsqzDr8LmaKQmWgoNF1WN849NQIPL&ipAddress=${ip.ipNum}`
      );

      const ipInfo = await ipInfoResponse.json();

      const data = {
        info: {
          "IP ADDRESS": ipInfo.ip,
          LOCATION: ipInfo.location.city + ", " + ipInfo.location.postalCode,
          TIMEZONE: "UTC " + ipInfo.location.timezone,
          ISP: ipInfo.isp,
        },
        position: [ipInfo.location.lat, ipInfo.location.lng],
        error: false,
      };

      setIpInfo(data);
    } catch (error) {
      setIpInfo({ ...ipInfo, error: true });
    }
  }

  return (
    <div className="window">
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
        error={ipInfo.error}
      />
      <Info ipInfo={ipInfo.info} />
      <Map position={ipInfo.position} />
    </div>
  );
}

export default MainWindow;
