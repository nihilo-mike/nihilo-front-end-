import {useState,useEffect} from 'react';
export const useFetch=(url)=>{
const[loading,setLoading]=useState(true);
const[data,setData]=useState([]);

const getData=async()=>{
 let auth =  localStorage.getItem('token');
 const response=await fetch(url, {
     method: 'GET',
     headers:{
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'Authorization': "Bearer" + auth,
     },
 });

const data=await response.json();
 setData(data);
 setLoading(false);
};

useEffect(()=>{
    getData();
    },[url]);
return{loading,data};   
}; 