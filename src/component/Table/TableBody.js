
function FetchData({data}){
 
      return (
        <>
        {!data ? (
          <div>lodding </div>
        ) : (
            <tbody >
            {data.map((data,i) => (
                <tr key={i} >
                   
                  <td key={data.logId} >{data.logId} </td>
                  <td  >{data.actionType} </td>
                  <td  className={data.applicationId ==null ? "text-black-50" : ""}>{data.applicationId ==null ? '-/-': data.applicationId}</td>
                  <td  className={data.applicationType ==null ? "text-black-50" : ""}>{data.applicationType ==null ? '-/-': data.applicationType} </td>
                  <td  className="text-black-50">-/-</td>
                  <td > {data.creationTimestamp}</td>
                </tr>
                ))}
                </tbody>
        )
    }
      </>
      );

}
export default FetchData;