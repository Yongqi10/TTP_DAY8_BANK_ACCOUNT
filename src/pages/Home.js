import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import './Home.css';
function Home(props) {

 const setUsername  = props.setUsername

  const onChange = (e) =>{
    setUsername(e.target.value)
  }


  return (
    
    <div className="width">
      <span>Username:</span>
      <input className="form-control mt-2" type="text" onChange={onChange}></input>
      <span >Password:</span>
      <input className="form-control mt-2" type="password"></input>

      <Link to = "/Content">
      <button className="btn btn-primary mt-2">Login</button>
      </Link>
    </div>
  );
}

export default Home;
