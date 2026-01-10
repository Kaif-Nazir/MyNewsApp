import './App.css';
import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


export default function App() {

  const [theme, setTheme] = useState(
    "dark"
  );


  let apiKey = "21217e7f6d7b4ea8ac968d99b8537f7e";

  return (
    <div className={`bg-${theme} min-vh-100`}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route exact path="/" element={<News theme={theme} key="general" pageSize={19} category="general" country="us" apiKey={apiKey} />} />
          <Route exact path="/business" element={<News theme={theme} key="business" pageSize={19} category="business" country="us" apiKey={apiKey} />} />
          <Route exact path="/entertainment" element={<News theme={theme} key="entertainment" pageSize={19} category="entertainment" country="us" apiKey={apiKey} />} />
          <Route exact path="/health" element={<News theme={theme} key="health" pageSize={19} category="health" country="us" apiKey={apiKey} />} />
          <Route exact path="/science" element={<News theme={theme} key="science" pageSize={19} category="science" country="us" apiKey={apiKey} />} />
          <Route exact path="/sports" element={<News theme={theme} key="sports" pageSize={19} category="sports" country="us" apiKey={apiKey} />} />
          <Route exact path="/technology" element={<News theme={theme} key="technology" pageSize={19} category="technology" country="us" apiKey={apiKey} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
