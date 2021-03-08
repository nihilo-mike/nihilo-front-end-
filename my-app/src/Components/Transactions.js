import React,{useEffect} from 'react';
import axios from 'axios';
import {useData} from "../Contexts/DataContext";
import Pagination from "react-js-pagination";

  

 const Transactions=()=>{
   const{setTransactions,
    totalRecords,
    setTotalRecords,
    currentPage,
    setCurrentPage}=useData();
    const pageRange = 4;
    const recordPerPage = 3;
    
  
    
    const handlePageChange = pageNumber => {
      setCurrentPage(pageNumber);
      axios.get(`https://nihiloacc.herokuapp.com/api/Transaction?pageNo=${currentPage}&pageSize=${recordPerPage}`,
      {'headers':{'Authorization':localStorage.getItem('token')}})
     .then(response=>{
       if(response.status==200){
         setTransactions(response.data.content);
         setCurrentPage(()=>response.data.pageable.pageNumber);
         setTotalRecords(()=>response.data.totalElements)
         }
       })}
       useEffect(() => {
         handlePageChange();
        }, []);
       return (
       <>
        <div className="mt-5 mb-3">
            <b>Current Page:</b><span className="ml-2">{currentPage}</span>
          </div>
    
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={recordPerPage}
            totalItemsCount={totalRecords}
            pageRangeDisplayed={pageRange}
            onChange={handlePageChange}
          />
         </>
      );
    
  }
 
 
 export default Transactions;