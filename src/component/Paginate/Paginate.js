import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

 function PaginatedItems({  data , setData ,numberOfRow  }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  let  results ={}
  let endOffset = 0
   let sliceArray =[]
  const resultObj   =  axios.get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`).then(res=>{
    results =res.data.result.auditLog
     endOffset = (itemOffset) + numberOfRow;
     sliceArray = results.slice(itemOffset, endOffset);
    
  });
  
  useEffect(() => {
     setCurrentItems(sliceArray);
    setPageCount(Math.ceil(results.length / numberOfRow));
  },[itemOffset, numberOfRow]);

  const handlePageClick = (event) => {
    const newOffset = ((event.selected ) * numberOfRow) % results.length;
    setItemOffset(newOffset);
    setCurrentItems(sliceArray)
    results = sliceArray
    console.log(results);
    setData(results);
  };

  return (
    <>
      <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={100}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
}
export default PaginatedItems;