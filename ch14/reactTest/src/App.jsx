import React, { useState, useCallback } from 'react';
import './App.css'

import Page from './pages/Page';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  // const [data, setData] = useState(null);



  const [category, setCategory] = useState('daegu');


  
  const onSelect = useCallback((category) => setCategory(category), []);


  return (
    <div>
      <Routes>
        <Route path="/" element={<Page category={category} onSelect={onSelect} />} />
        <Route path="/:category" element={<Page />} />
      </Routes>
    </div>
  );
};

export default App;