import './App.css';
import React, { useEffect, useState } from 'react';
import { Cards, Charts, CountrySelect } from './components'

import { fetchData } from './api/api';

function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res);
      })
  },[]);

  const handleCountryChange = async (country) => {

    console.log(country);
    if (!country) return "Get country fail.."
  }
  

  return (
    <div className="App">
      <Cards data = {data}/>
      <CountrySelect  handleCountryChange={handleCountryChange}/>
      <Charts />
    </div>
  );
}

export default App;
