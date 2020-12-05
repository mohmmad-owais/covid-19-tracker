import React,{ useState,useEffect } from 'react';

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api/index'; 






function App() {

  const [data,setData] =useState([{}]);
  
  const [country,setCountry] =useState('');
  
useEffect(()=>{
      async function getData()
      {
      const response= await fetchData();
      
      
      setData(response);
      
      
      }
getData();

},[])

const handleCountryChange = async (country)=>{
    const response= await fetchData(country);
    setData(response);
    setCountry(country);
    
     
}


  return (
     
    <div className={styles.container}>
        
        <Cards  data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} />

    </div>
  );
}

export default App;
