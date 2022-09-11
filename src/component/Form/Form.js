import React, { useState } from 'react'
import axios from 'axios'

const Form = ({ data, setData }) => {
  const [name, setName] = useState('')
  const [applicationID, setApplicationID] = useState('')
  const [ApplicationType, setApplicationType] = useState('')
  const [ActionType, setActionType] = useState('')
  const[FormDate ,setFormDate ] =useState('')
  const[ToDate ,setToDate ] =useState('')


  let results = {}
  let result =[]
  const Sreach = (e) => {
    e.preventDefault()
    const resultObj = axios
      .get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`)
      .then((res) => {
        results = res.data.result.auditLog
        console.log(results);
         result = results.filter((result) => {
          return (
            result.applicationId === parseInt(applicationID) ||
            result.actionType === ActionType ||
            result.applicationType === ApplicationType ||
           (result.creationTimestamp >= FormDate &&  result.creationTimestamp <= ToDate)
          )
        })
        console.log(resultObj);
    
        setData(result)
      })
  }
  return (
    <>
      <form className=" mx-3 form-row" onSubmit={Sreach}>
        <div className="  mx-3">
          <label className=" d-block" htmlFor="inlineFormCustomSelectPref">
            employee Name
          </label>
          <input
            className="form-control"
            name="user_name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className=" mx-3">
          <label className=" d-block" htmlFor="inlineFormCustomSelectPref">
            applicationID
          </label>
          <input
            className="form-control"
            type="text"
            value={applicationID}
            onChange={(e) => setApplicationID(e.target.value)}
          />
        </div>
        <div className=" mx-3">
          <label htmlFor="Action Type">Application Type</label>
          <select
            className="custom-select"
            onChange={(e) => setApplicationType(e.target.value)}
          >
            <option value="DARI_REFRESH_TOKEN">DARI_REFRESH_TOKEN</option>
            <option value="LEASE_CLOSURE">LEASE_CLOSURE</option>
            <option value="DARI_REFRESH_TOKEN">DARI_REFRESH_TOKEN</option>
            <option value="INITIATE_APPLICATION">INITIATE_APPLICATION</option>
            <option value="CERT_PROP_OWNERSHIP">CERT_PROP_OWNERSHIP</option>
          </select>
        </div>

        <div className=" mx-3">
          <label htmlFor="Action Type">Action Type</label>
          <select
            className="custom-select"
            onChange={(e) => setActionType(e.target.value)}
          >
            <option value="DARI_REFRESH_TOKEN">DARI_REFRESH_TOKEN</option>
            <option value="LEASE_CLOSURE">LEASE_CLOSURE</option>
            <option value="DARI_REFRESH_TOKEN">DARI_REFRESH_TOKEN</option>
            <option value="INITIATE_APPLICATION">INITIATE_APPLICATION</option>
            <option value="CERT_PROP_OWNERSHIP">CERT_PROP_OWNERSHIP</option>
            <option value=" ADD_EMPLOYEE"> ADD_EMPLOYEE</option>
           
          </select>
        </div>

        <div className=" mx-3">
          <label className=" d-block" htmlFor="Application Type">
            From Date
          </label>
          <input className="form-control" type="date" onChange={(e) => setFormDate(e.target.value)}/>
        </div>

        <div className=" mx-3">
          <label className=" d-block" htmlFor="Application Type">
            To Data
          </label>

          <input className="form-control" type="date"  onChange={(e) => setToDate(e.target.value)}/>
        </div>

        <div className="col-auto  mx-3 my-4">
          <button type="submit" className="btn btn-primary">
            Search looger
          </button>
        </div>
        <div className="col-auto  mx-3 my-4">
          <button type="submit" className="btn btn-primary" onClick={(e) => window.location.reload(false)}>
            reset form 
          </button>
        </div>
      </form>
    </>
  )
}

export default Form
