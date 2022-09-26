import React, { useState } from 'react'
import axios from 'axios'

const Form = ({ setData }) => {
  const [name, setName] = useState('')
  const [applicationID, setApplicationID] = useState('')
  const [ApplicationType, setApplicationType] = useState('')
  const [ActionType, setActionType] = useState('')
  const [FormDate, setFormDate] = useState('')
  const [ToDate, setToDate] = useState('')

  const optionsActionType = [
    { value: '', label: '' },
    { value: 'DARI_REFRESH_TOKEN', label: 'dari refresh token' },
    { value: 'INITIATE_APPLICATION', label: 'initiate application' },
    { value: 'SUBMIT_APPLICATION', label: 'submit application' },
    { value: 'ADD_EMPLOYEE', label: 'add employee' },
  ]

  const optionsApplicationType = [
    { value: '', label: '' },
    { value: 'CERT_TITLE_DEED_PLOT', label: 'Cert Title Deed Plot' },
    { value: 'LEASE_REGISTRATION', label: 'Lease Registration' },
    { value: 'ADD_POA', label: 'Add Poa' },
    { value: 'ADD_COMPANY', label: 'Add Company' },
    { value: 'ADD_COMPANY_EMPLOYEE', label: 'Add Company Employee' },
    { value: 'CERT_PROP_OWNERSHIP', label: 'Cert Prop Ownership' },
  ]
  let results = {}
  let filter_result = []
  let search_result = []
  const Sreach = (e) => {
    e.preventDefault()
    const resultObj = axios
      .get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`)
      .then((res) => {
        results = res.data.result.auditLog
        filter_result = results.filter((result) => {
          return (
            result.applicationId == applicationID ||
            result?.applicationType === ApplicationType ||
            result?.actionType === ActionType ||
            result?.logInfo?.includes(name) ||
            (result.creationTimestamp >= FormDate &&
              result.creationTimestamp <= ToDate)
          )
        })

        search_result = filter_result.filter((result) => {
          return (
            result?.actionType?.includes(ActionType) &&
            (ApplicationType == "" ? true : result?.applicationType?.includes(ApplicationType))  &&
            (applicationID == "" ? true : result?.applicationId?.toString().includes(applicationID))&&
            (name == '' ? true : result?.logInfo?.includes(name)) &&
            ((FormDate == '' || ToDate == '')
              ? true
              : (result.creationTimestamp >= FormDate &&
                result.creationTimestamp <= ToDate))
          )
        })
        setData(search_result)
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
            name="applicationID"
            onChange={(e) => setApplicationID(e.target.value)}
          />
        </div>
        <div className=" mx-3">
          <label htmlFor="Action Type">Application Type</label>
          <select
            className="custom-select"
            name="ApplicationType"
            onChange={(e) => setApplicationType(e.target.value)}
          >
            {optionsApplicationType.map(({ value, label }, index) => (
              <option value={value} key={index}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className=" mx-3">
          <label htmlFor="Action Type">Action Type</label>
          <select
            className="custom-select"
            name="ActionType"
            onChange={(e) => setActionType(e.target.value)}
          >
            {optionsActionType.map(({ value, label }, index) => (
              <option value={value} key={index}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className=" mx-3">
          <label className=" d-block" htmlFor="date">
            From Date
          </label>
          <input
            className="form-control"
            type="date"
            onChange={(e) => setFormDate(e.target.value)}
          />
        </div>

        <div className=" mx-3">
          <label className=" d-block" htmlFor="date">
            To Data
          </label>

          <input
            className="form-control"
            type="date"
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>

        <div className="col-auto  mx-3 my-4">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              name.length == 0 &&
              applicationID.length == 0 &&
              ApplicationType.length == 0 &&
              ActionType.length == 0 &&
               (FormDate.length == 0  || ToDate.length == 0)
            }
          >
            Search looger
          </button>
        </div>
        <div className="col-auto  mx-3 my-4">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => window.location.reload(false)}
          >
            reset form
          </button>
        </div>
      </form>
    </>
  )
}

export default Form
