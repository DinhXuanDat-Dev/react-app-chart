import './App.css';
import React, { useEffect, useState } from 'react';
import { Cards, Charts, CountrySelect } from './components'

import { fetchData } from './api/api';

function App() {

  const [data, setData] = useState({})
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res);
      })
  },[]);

  const handleCountryChange = async (country) => {
   const fetchApiCountry = await fetchData(country);
   
   setData(fetchApiCountry)
   setCountryData(country)
  }

  return (
    <div className="App">
      <Cards data = {data} /> 
      <CountrySelect  handleCountryChange={handleCountryChange}/>
      <Charts data={data} countryData={countryData} />
    </div>
  );
}

export default App;
