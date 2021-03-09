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
    const pageRange = Math.ceil(totalRecords/4);
    const recordPerPage = 2;

   const getData=(pageNo)=>{
      axios.get(`https://nihiloacc.herokuapp.com/api/Transaction?pageNo=${pageNo}&pageSize=${recordPerPage}`,
      {'headers':{'Authorization':localStorage.getItem('token')}})
     .then(response=>{
      if(response.status==200){
        let res=response.data.map(a=>a.content);
        let page=response.data.map(b=>b.pageable);
        let totalElements=response.data.map(c=>c.totalElements)
        console.log()
        setTransactions(res);
        setCurrentPage(()=>page[0].pageNumber||0);
         setTotalRecords(()=>totalElements[0])
         }
       })
    }

    useEffect(() => {
      getData(0);
     }, []); 
   
   const handlePageChange = pageNumber => {
      //setCurrentPage(pageNumber);
      getData(pageNumber);  
    }
      return (
       <>
        <div className="mt-5 mb-3">
            <b>Current Page:</b><span className="ml-2">{currentPage}</span>
          </div>
    
          <Pagination
           itemClass="page-item" 
           linkClass="page-link"
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