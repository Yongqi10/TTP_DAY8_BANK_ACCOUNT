import React, {Fragment}from "react";
import DataInDebits from "../Component/DataInDebits";
import "./Debits.css";



function Debits() {
  return (
    <Fragment>
        <h3 className="width">Debits</h3>
      <ul className="list-group width">
        <DataInDebits />
      </ul>
    </Fragment>
  );
}

export default Debits;
