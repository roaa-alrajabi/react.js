import React, { useState } from "react";
import  "../../index.css";
import axios from 'axios'

const Header = [
  
    { label: "Log ID", header_key: "logId", sortable: true },
    { label: "Application Type", header_key: "applicationType", sortable: true },
    { label: "Application ID", header_key: "applicationId", sortable: true },
    { label: "Action", header_key: "action", sortable: true },
    { label: "Action Detail", header_key: "actionType", sortable: true },
    { label: "Date : Time", header_key: "creationTimestamp", sortable: true },
  ];


  var result =[]
  const HeaderTable = ({data,setData}) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");
     const handleSortingChange = async (header_key) => {
      var SortData = [... data]
      axios
      .get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`)
      .then((res) => {
        result  = res.data.result.auditLog
        
        setSortField(header_key);
        const sortOrderIcon = header_key === sortField && order === "asc" ? "desc" : "asc";
        setOrder(sortOrderIcon);

        function compare(a, b) {
          if(order === "desc"){
                return a[sortField] - b[sortField]
            }
            return b[sortField] - a[sortField]   
            
          }
          SortData.sort(compare);
        setData(SortData)
    })
  }

   
    return (
        <>
      
           <tr >
            {Header.map(({ label, header_key ,sortable }) => {
            
                const cl = sortable ? sortField === header_key && order === "asc" ? "fa fa-caret-up": sortField === header_key && order === "desc" ? "fa fa-caret-down": "fa fa-caret-up": "";
              return (
                <th scope="col"
                  key={header_key}
                  onClick={sortable ? () => handleSortingChange(header_key) : null}
                    
                  >
                    {label}
                    <i className={`ml-3 ${cl}`}  > </i>
                </th>
                
              );
            })}
           </tr >
            
        </>
      );
    };

    export default HeaderTable;