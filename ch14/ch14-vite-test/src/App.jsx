import React, { useState, useCallback } from 'react';
import './App.css'

import NewsPage from './pages/NewsPage';
import Daegu from './components/Daegu';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  const [data, setData] = useState(null);
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(
  //   (category) => setCategory(category)
  //   ,
  //   []);
  const [category, setCategory] = useState('daegu');
  const onSelect = useCallback((category) => setCategory(category), []);


  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<NewsPage />} /> */}
        <Route path="/" element={<NewsPage category={category} onSelect={onSelect} />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </div>
  );
};

export default App;