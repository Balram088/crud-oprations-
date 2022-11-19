import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState} from 'react';


export const Home = () => {
    const  [data, setData] = useState([]);
      
    const loadData = async () => {    
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };
    useEffect(() =>{
        loadData();
    },[]);
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}
