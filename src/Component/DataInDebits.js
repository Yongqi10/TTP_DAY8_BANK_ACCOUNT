import React, { useState, useEffect, Fragment } from "react";
import ButtonAdd from './ButtonAdd'


function DataInDebits() {
  const [Debit, setDebit] = useState(() => {
    return [];
  });
  const [loading, setLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

  const GETAPI = async () => {
    try {
      const response = await fetch("https://moj-api.herokuapp.com/debits");
      const data = await response.json();
      setDebit((previous) => (previous = data));
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    GETAPI();
  }, []);

  let totalForD = Object.values(Debit).reduce((t,{amount})=>{
    return t+amount
 },0)

 useEffect(()=>{
  setTotalAmount((prv)=>prv = totalForD)
 },[totalForD])

  return (
    <Fragment>
      <ButtonAdd Data = {Debit} setData = {setDebit}/>
      <h4>Total:{totalAmount}</h4>
      {loading === false ? (
        Debit.map((items, index) => {
          return (
            <li
              key={items + index}
              className="list-group-item"
              onMouseEnter={(e) => {
                e.target.className = "list-group-item active";
              }}
              onMouseLeave={(e) => {
                e.target.className = "list-group-item";
              }}
            >
              Description:&nbsp;{items.description}
              <br />
              Amount:&nbsp;{items.amount}
              <br />
              Date:&nbsp;{items.date}
            </li>
          );
        })
      ) : (
        <p>loading</p>
      )}
    </Fragment>
  );
}

export default DataInDebits;
