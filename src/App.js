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

  return (
    <div className="App">
      <Cards data = {data}/>
      <Charts />
      <CountrySelect />
    </div>
  );
}

export default App;
