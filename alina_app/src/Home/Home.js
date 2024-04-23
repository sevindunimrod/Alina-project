import React from 'react'
import Navbar from '../Navbar/Navbar.js';
import './Home.css';
import ProductsSection from './ProductsSection.js';
import Footer from '../Footer/Footer.js';


export default function Home() {
  return (
    <>
      <div className='cont'>
      <Navbar/>

      <section>
        <div className="header_cont">
          <div className="hero_section">
            {/* <img src={require('../Images/Home_Back.jpg')} alt="homeImg" /> */}
            <h1>ALINA</h1>
            <p>CEYLON <span>COCO</span> AND <span>NATURAL</span> PRODUCTS</p>
          </div>
      </div>
      </section>
      
    </div> 
    <ProductsSection/>
    <Footer/>
    </>
   
    
    
  )
}
