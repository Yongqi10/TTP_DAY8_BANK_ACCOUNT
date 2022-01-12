import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import './Home.css';
function Home() {
  return (
    <div className="width">
      <span>Username:</span>
      <input className="form-control mt-2" type="text"></input>
      <span >Password:</span>
      <input className="form-control mt-2" type="password"></input>

      <Link to = "/Content">
      <button className="btn btn-primary mt-2">Login</button>
      </Link>
    </div>
  );
}

export default Home;
