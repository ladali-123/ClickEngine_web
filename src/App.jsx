import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Aboutus from './components/Aboutus';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import Contact  from './components/Contact';
import Blogs from './components/Blogs'
import CtaSection from './components/CtaSection'; 
import Footer from './components/Footer'

function App() {
return (
    <>
     <Navbar/>
     <Herosection/>
     <Aboutus/>
     <WhyChoose/>
     <Services/>
     <Contact/>
     <Blogs/>
     <CtaSection/>
     <Footer/>
    </>
  )
}

export default App
