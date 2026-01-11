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

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

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
          <Route exact path="/" element={<News setProgress={setProgress} theme={theme} key="general"  category="general" apiKey={apiKey} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} theme={theme} key="business"  category="business"  apiKey={apiKey} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} theme={theme} key="entertainment"  category="entertainment"  apiKey={apiKey} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} theme={theme} key="health"  category="health"  apiKey={apiKey} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} theme={theme} key="science"  category="science"  apiKey={apiKey} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} theme={theme} key="sports"  category="sports"  apiKey={apiKey} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} theme={theme} key="technology"  category="technology"  apiKey={apiKey} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
