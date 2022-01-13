import React from "react";
import { useState } from "react/cjs/react.development";
import './ButtonAdd.css'


function ButtonAdd(props) {

    const [Data,setData] = [props.Data, props.setData]
    const [Amount,setAmount] = useState(0)
    const [Description, setDescription] = useState('')
    const [Date, setDate] = useState('')

    const onChangeAmount = (e) =>
    {
        setAmount(()=>parseFloat(e.target.value))
    }

    const conChangeDescription = (e) => {
        setDescription(()=>e.target.value)
    }

    const onChangeDate = (e) => {
        setDate(() => e.target.value)
    }

    const onClickSave = () => {
        let copy = [...Data];
        let id = (Math.random() * 100000).toString()
        copy.push({amount:Amount,description:Description,date:Date, id:id})
        console.log(copy)
        setData(copy)
    }


  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary btnUse"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
      >
        ADD
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                ADD
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="Amount" className="col-form-label">
                    Amount:
                  </label>
                  <input type="number" className="form-control" id="Amount" onChange = {onChangeAmount}/>
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Description:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    onChange = {conChangeDescription}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="Date" className="col-form-label">
                    Date:
                  </label>
                  <input type="text" className="form-control" id="Date" onChange = {onChangeDate}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={onClickSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonAdd;
