import { useEffect } from 'react';
import { BrowserRouter, useLocation } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Footer,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.gtag('config', 'YOUR_TRACKING_ID', {
      page_path: location.pathname, // Specify the current path
    });
  }, [location]);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
