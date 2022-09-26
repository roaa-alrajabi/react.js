
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import Form  from "../Form/Form";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginate from '../Paginate/Paginate';


const Table = () => {
  
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [DataPerPage] = useState(10);
  
  const getData = async () => {
      const { data } = await axios.get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`);
      setLoading(true)
      setData(data.result?.auditLog);
      setLoading(false)
    };
    
    useEffect(() => {
      
      getData();
      
    },[]);

  const indexOfLastData = currentPage * DataPerPage;
  const indexOfFirstData = indexOfLastData - DataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData)


  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <>
    
    <Form  setData={setData}/>
    <table  className="table">
      <thead  className="thead">
      <TableHeader data={data} setData={setData}  />
      </thead>
      
      <TableBody data={currentData}  />
      </table>
       { data ?
      <div className="d-flex justify-content-center" >
      <Paginate DataPerPage={DataPerPage}
        totalPosts={data.length}
        paginate={paginate}
         />
      </div>
      :''
} 
    </>
  );
};


export default Table;