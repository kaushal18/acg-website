import React from "react";
import loader from "./images/new-loader.gif";
import "./styles/loader.css";

const Loader = () => {
  return (
    <div className="loaderImg">
      <img className="mb-4" src={loader} alt="loading-gif" />
    </div>
  );
};

export default Loader;
