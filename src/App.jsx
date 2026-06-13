import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Aboutus from './components/Aboutus';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import Contact from './components/Contact';
import Blogs from './components/Blogs'
import CtaSection from './components/CtaSection';
import Footer from './components/Footer'
import Webdev from './Services/Webdev'
import Seo from './Services/Seo';
import Digital from './Services/Digital';
import Marketing  from './Services/Marketing';
import Getstarted from './components/Getstarted';
import ErrorBoundary from './components/ErrorBoundary';
import Admission from './pages/Admission';
import Institute from './pages/Institute';
import Seoservice from './pages/Seoservice';
import SocialMedia from './pages/SocialMedia';
import Ads from './pages/Ads';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Herosection />
            <Aboutus />
            <WhyChoose />
            <Services />
            <Contact />
            <Blogs />
            <CtaSection />
          </>
        }
        />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Webdevservices' element={<Webdev/>}/>
        <Route path ='/seoservice' element ={<Seo/>}/>
        <Route path = '/digitalmedia' element = {<Digital/>}/>
        <Route path = '/marketing' element = {<Marketing/>}/>
        <Route path =  '/admission-management-system' element ={<Admission/>}/>
        <Route path = '/institute-management-system' element = {<Institute/>}/>
        <Route path ='/seo-service' element = {<Seoservice/>}/>
        <Route path ='/social-media-marketing' element = {<SocialMedia/>}/>
        <Route path ='/google-ads-management' element ={<Ads/>}/>
        <Route path='/getstarted' element={<ErrorBoundary><Getstarted/></ErrorBoundary>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
