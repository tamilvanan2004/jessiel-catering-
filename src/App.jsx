import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Services from './sections/Services';
import Industries from './sections/Industries';
import WhyChoose from './sections/WhyChoose';
import Process from './sections/Process';
import Events from './sections/Events';
import ClientTrust from './sections/ClientTrust';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false);
    };

    // Check if browser has already finished loading
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      // Wait until browser finishes loading
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Navbar />

      <Box component="main" sx={{ pt: '88px' }}>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Industries />
        <WhyChoose />
        <Process />
        <Events />

        {/* <ClientTrust /> */}

        <Testimonials />
        <Contact />
      </Box>

      <Footer />
    </Box>
  );
}