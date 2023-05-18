import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Outlet } from 'react-router-dom'

function ServicesLayout() {
const [serviceData,setServiceData] =useState(null);

async function fetchServices() {
  const response = await axios.get(
    "http://10.138.1.35:8000/api/v1/services"
  );
  setServiceData(response.data);
}

useEffect(() => {
    fetchServices();
  }, []);
  return (
    <div>
        <Outlet context={[serviceData]}/>
    </div>
  )
}

export default ServicesLayout