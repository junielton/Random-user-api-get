import React from "react";
import logo from "./gif.svg";
import "./style.css";

const Loading = ({ message }) => (
  <div className="loading">
    <img src={logo} alt="" />
    <h2>{message}</h2>
  </div>
);

export default Loading;
