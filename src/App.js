import './App.css';
import { useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import ScrollToTop from './Component/ScrollToTop';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export default function App() {

  const [theme, setTheme] = useState(
    "dark"
  );
  const [progress, setProgress] = useState(0);


  return (
    <div className={`bg-${theme} min-vh-100`}>
      <HashRouter>

        <LoadingBar
          color="#f11946"
          height={2}  
          progress={progress}
        />
        <ScrollToTop />
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} theme={theme} key="general"  category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} theme={theme} key="business"  category="business"   />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} theme={theme} key="entertainment"  category="entertainment"   />} />
          <Route exact path="/health" element={<News setProgress={setProgress} theme={theme} key="health"  category="health"   />} />
          <Route exact path="/science" element={<News setProgress={setProgress} theme={theme} key="science"  category="science"   />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} theme={theme} key="sports"  category="sports"   />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} theme={theme} key="technology"  category="technology"   />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
