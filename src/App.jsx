import { useState } from 'react'
import './App.css'
import landingPageData from './contant/data'
import Header from './components/Header';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  console.log("landingPage", landingPageData);
  

  return (
    <>
    <Header/>
 {/* hero section  */}

 <Hero/>

{/* feature section  */}
 <Feature/>

{/* testimonial section  */}

<Testimonial/>
{/* footer section  */}

<Footer/>

    </>
  )
}

export default App
