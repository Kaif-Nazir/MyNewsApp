import './App.css';
import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import ScrollToTop from './Component/ScrollToTop';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export default function App() {

  const [theme, setTheme] = useState(
    "dark"
  );
  const [progress, setProgress] = useState(0);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  return (
    <div className={`bg-${theme} min-vh-100`}>
      <BrowserRouter>

        <LoadingBar
          color="#f11946"
          height={2}  
          progress={progress}
        />
        <ScrollToTop />
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} theme={theme} key="general" pageSize={19} category="general" country="us" apiKey={apiKey} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} theme={theme} key="business" pageSize={19} category="business" country="us" apiKey={apiKey} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} theme={theme} key="entertainment" pageSize={19} category="entertainment" country="us" apiKey={apiKey} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} theme={theme} key="health" pageSize={19} category="health" country="us" apiKey={apiKey} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} theme={theme} key="science" pageSize={19} category="science" country="us" apiKey={apiKey} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} theme={theme} key="sports" pageSize={19} category="sports" country="us" apiKey={apiKey} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} theme={theme} key="technology" pageSize={19} category="technology" country="us" apiKey={apiKey} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
