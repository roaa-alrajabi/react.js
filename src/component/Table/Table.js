
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import Form  from "../Form/Form";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginate from '../Paginate/Paginate';


const Table = () => {
  
  const [data, setData] = useState(null);
  
  const getData = async () => {
      const { data } = await axios.get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`);
      setData(data.result?.auditLog.slice(0, 10));
    };
    
    useEffect(() => {
      
      getData();
      
    },[]);

  return (
    <>
    <div>
    <Form data={data} setData={setData}/>
    </div>
    <table  className="table">
      <thead  className="thead">
      <TableHeader data={data} setData={setData}/>
      </thead>
      <TableBody data={data}/>
      </table>
      { data ?
      <div className="d-flex justify-content-center" >
      <Paginate data={data} setData={setData} numberOfRow={10} />
      </div>
      :
      null
}
    </>
  );
};


export default Table;