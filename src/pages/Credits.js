import React, { useState, useEffect, Fragment } from "react";
import DataInCredit from "../Component/DataInCredit";
import "./Credits.css";
function Credits() {
  return (
    <Fragment>
        <h3 className="width">Credits</h3>
      <ul className="list-group width">
        <DataInCredit />
      </ul>
    </Fragment>
  );
}

export default Credits;
