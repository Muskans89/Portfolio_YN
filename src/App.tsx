import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';

import './index.css';

const App = () => {
  // Scroll-to-top functionality within the App component
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop /> {/* This will scroll to top on every route change */}
      <Routes>
        <Route path="/" element={<Home />} />
    
      </Routes>
    </Router>
  );
};
export default App;
