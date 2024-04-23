import React from 'react'
import Navbar from '../Navbar/Navbar.js';
import './AboutUs.css';
import Footer from '../Footer/Footer.js';

export default function AboutUs() {
  return (
    <div>
    <header>
      <div className="about_cont">
      <Navbar/>
      <div className="hText">
        About Alina
      </div>
      <div className="header_dis">
        <p>Your trusted source for premium organic coco and coir-based products, proudly cultivated and crafted in the lush coconut triangle of Sri Lanka. 
        At Alina, we are more than just suppliers; we are dedicated to forging sustainable connections between conscientious buyers and local producers, 
        including persons with disabilities, who contribute to the extraordinary quality of our offerings.</p>
      </div>
      </div>
    </header>
    <section className='sec_1'>
      <div className="items">
        <div className="item_card">
          <div className="card_img">
            <img src={require('../Images/cardIMG/history.webp')} alt="about_img" />
          </div>
          <div className="title_card">
            <h2>Our Story</h2>
          </div>
        </div>
        <div className="item_card">
          <div className="card_img">
            <img src={require('../Images/cardIMG/mission.jpg')} alt="about_img" />
          </div>
          <div className="title_card">
            <h2>Our Mission</h2>
          </div>
        </div>
        <div className="item_card">
          <div className="card_img">
            <img src={require('../Images/cardIMG/producer.jpg')} alt="about_img" />
          </div>
          <div className="title_card">
            <h2>Our Producers</h2>
          </div>
        </div>
        <div className="item_card">
          <div className="card_img">
            <img src={require('../Images/cardIMG/products.jpg')} alt="about_img" />
          </div>
          <div className="title_card">
            <h2>Our Products</h2>
          </div>
        </div>
      </div>
    </section>

    <section className='sec_2'>
      <div className="cont_sec2">
        <div className="header_sec2">
          <h1>Our Story</h1>
        </div>

        <div className="content_sec2">
          <p>Alina (Pvt) Ltd. has its roots deep in the heart of Sri Lanka's coconut-rich landscapes. <br /><br />
          We are passionate about harnessing the untapped potential of this tropical paradise and channelling it into an array of eco-friendly solutions. <br /><br />
          Our journey began as a commitment to promote sustainable agriculture, boost local communities, and provide the world with environmentally responsible products.</p>
        </div>
      </div>

    </section>

    <section className='sec_3'>
    <div className="cont_sec2">
        <div className="header_sec2">
          <h1>Our Mission</h1>
        </div>

        <div className="content_sec2">
          <p>Our mission is twofold - to foster an eco-conscious approach to agriculture and to empower local small and medium-scale producers, <br /><br />
          including persons with disabilities, by creating an equitable platform for their invaluable contributions.</p>
        </div>
      </div>
    </section>
        
    <section className='sec_4'>
    <div className="cont_sec4">
        <div className="header_sec4">
          <h1>Our Producers:<br/> Empowering Lives</h1>
        </div>

        <div className="content_sec4">
          <p>At Alina, we take pride in our network of small and medium-scale producers, many of whom are individuals with disabilities.
           We believe in the power of inclusivity and diversity, and we provide opportunities for these talented individuals to showcase their skills 
           and work within a supportive community. <br /><br />
           Our commitment to social responsibility extends beyond mere employment; we offer training, support, and the opportunity for producers to develop their skills. 
           The result is a close-knit network of passionate individuals whose dedication is reflected in the exceptional quality of our products</p>
        </div>
      </div>
    </section>
    <section className='sec_5'>
    <div className="cont_sec2">
        <div className="header_sec2">
          <h1>Our Products</h1>
        </div>

        <div className="content_sec2">
          <p>Our product line is a reflection of our commitment to the environment, to the local community, and to the discerning buyers who share our values.
           We offer a diverse range of eco-friendly coco and coir-based solutions, designed to meet your needs while minimizing your ecological footprint. <br /><br />
          
          From Alina Coir Brushes for sustainable cleaning to Alina Coco Peat Grow Bags for nurturing your green spaces, our products embody eco-friendliness and sustainability. 
          They are meticulously crafted from renewable coir and natural materials, reflecting our dedication to responsible sourcing and production. <br /><br />

          Each of our products embodies our commitment to environmental sustainability, from the sourcing of materials to the skilled craftsmanship of local producers, including 
          those with disabilities. When you choose Alina, you choose products that nurture both the Earth and the local community.</p>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}
