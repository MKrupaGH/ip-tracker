import React from "react";
import "../styles/main-window.css";
import arrow from "../images/icon-arrow.svg";

function SearchInput({ handleChange, handleClick, error }) {
  return (
    <div className="search-box">
      <div className="text">IP Address Tracker</div>
      <div className={"search input-group"}>
        <input
          type="text"
          className={"input-search form-control"}
          placeholder="Write IP"
          aria-label="Write IP"
          aria-describedby="button-addon2"
          onChange={(e) => handleChange(e)}
        />
        <button
          className={"btn-search btn btn-outline-secondary"}
          type="button"
          id={"button-addon2"}
          onClick={handleClick}
        >
          <img className="img-search" src={arrow} alt="" />
        </button>
      </div>
      {error && <div className="error">'Input correct IPv4 or IPv6 address.'</div>}
    </div>
  );
}

export default SearchInput;
