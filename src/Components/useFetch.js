import {useState,useEffect} from 'react';
export const useFetch=(url)=>{
const[loading,setLoading]=useState(true);
const[data,setData]=useState([]);

const getData=async()=>{
 const response=await fetch(url,
{'headers':{'Authorization':localStorage.getItem('token')}
});

const data=await response.json();
 setData(data);
 setLoading(false);
};

useEffect(()=>{
    getData();
    },[]);
return{loading,data};   
}; 