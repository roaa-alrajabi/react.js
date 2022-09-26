

function FetchData({data }){
      return (
        <>

        {data.length <= 0   ? 
         <div className="d-flex" >
          <div> No there is data  </div>
         </div>
        : 
            <tbody >
            {data.map((data,i) => (
                <tr key={i} >
                   
                  <td key={data.logId} >{data.logId} </td>
                  <td  >{data.applicationType} </td>
                  <td  className={data.applicationId ==null ? "text-black-50" : ""}>{data.applicationId ==null ? '-/-': data.applicationId}</td>
                  <td  className={data.actionType ==null ? "text-black-50" : ""}>{data.actionType ==null ? '-/-': data.actionType} </td>
                  <td  className="text-black-50">-/-</td>
                  <td > {data.creationTimestamp}</td>
                </tr>
                ))}
                </tbody>    
    }
      </>
      );

}
export default FetchData;