import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar.js';
import './Products.css';
import { Contents } from './Contents.js';
import Footer from '../Footer/Footer.js';

export default function Products() {

  // const [items, setItems] = useState([]);
  // const [visible, setVisible] = useState(8);

  // const showMore = () => {
  //   setVisible((preValue) => preValue + 4);
  // }
  // , setProducts
  const [products] = useState([
    {
      image: require('../Images/products/extra/1.png'), title: 'Alina Coco Peat Grow Bags',
      description: 'At Alina, we offer the ultimate solution for all your gardening needs with our premium Alina Coco Peat Grow Bags. Whether you are a seasoned gardener or just starting your green journey, our eco-friendly grow bags are the key to nurturing healthy plants and vibrant blooms'
    },
    {
      image: require('../Images/products/extra/2.png'), title: 'Alina Grow Cubes',
      description: 'Alina Grow Cubes offer a sustainable solution for seed-starting and hydroponic systems. Made from renewable coir, these cubes provide an ideal medium for seedlings. Use them to kickstart your garden or hydroponic projects in an eco-friendly way, supporting healthy and sustainable plant growth'
    },
    {
      image: require('../Images/products/extra/3.png'), title: 'Alina Coco Peat and Husk Chip Bales',
      description: 'Our Alina Coco Peat and Husk Chip Bales are eco-conscious soil conditioning solutions. Made from renewable sources, these versatile bales enhance soil structure, moisture retention, and aeration. Perfect for horticultural and agricultural applications, they ensure healthy plant growth while minimising environmental impact, promoting soil sustainability'
    },
    {
      image: require('../Images/products/extra/4.png'), title: 'Alina Grow Pots',
      description: 'Elevate your gardening with Alina Grow Pots. Made from sustainable coir, these eco-friendly pots are perfect for nurturing a variety of plants. Use them for planting, potting, and container gardening, ensuring that your plants grow sustainably in a container that is kind to the environment'
    },
    {
      image: require('../Images/products/extra/5.png'), title: 'Alina Coco Peat and Husk Chip Briquettes',
      description: 'Make an environmentally responsible choice with our Alina Coco Peat and Husk Chip Briquettes. These sustainable briquettes are designed to enhance soil health and structure without harming the environment. They are ideal for various agricultural applications, providing the benefits of natural materials while contributing to soil sustainability in agriculture'
    },
    {
      image: require('../Images/products/extra/6.png'), title: 'Alina Coco Peat and Husk Chip 200L Bales',
      description: 'Alina Coco Peat and Husk Chip 200L Bales are the ultimate choice for enhancing soil health and structure sustainably. Crafted from renewable sources, these bales are perfect for large-scale horticultural and agricultural applications, such as soil conditioning, landscaping, and crop cultivation. Use them to enhance soil health and structure while contributing to sustainable agriculture and land use'
    },
    {
      image: require('../Images/products/extra/7.png'), title: 'Alina Chopped Coco Peat 5kg Bales',
      description: 'Alina Chopped Coco Peat 5kg Bales are the eco-conscious choice for soil conditioning. Crafted from renewable sources, these bales are perfect for improving soil structure and moisture retention. Use them in gardening, agriculture, and landscaping to ensure healthier and more sustainable plant growth'
    },
    {
      image: require('../Images/products/extra/8.png'), title: 'Alina Twisted Fibre',
      description: 'Alina Twisted Fibre is a versatile and eco-friendly material. Made from natural coir, it is perfect for various crafting, gardening, and home improvement projects. Explore creative and sustainable applications with our twisted fibre, ensuring that your projects are not only versatile but also eco-friendly'
    },
    {
      image: require('../Images/products/extra/9.png'), title: 'Alina Fibre Bales',
      description: 'Alina Fibre Bales are sustainable solutions for improving soil health and structure. Made from renewable coir, these bales are ideal for horticultural and agricultural applications, such as soil conditioning and landscaping. Choose eco-conscious soil enhancement for your projects, ensuring a greener and more sustainable Earth'
    },
    {
      image: require('../Images/products/extra/10.png'), title: 'Alina Coco Poles',
      description: 'Our Alina Coco Poles are eco-friendly and durable support structures for climbing plants. Made from renewable coir, these poles are perfect for gardeners and landscapers looking to create vertical gardens and support plants in a sustainable way. They provide lasting support to your plants while promoting sustainable gardening practices'
    },
    {
      image: require('../Images/products/extra/11.jpg'), title: 'Alina Coir Weed Prevention Disks',
      description: 'Take a natural approach to weed prevention with our Alina Coir Weed Prevention Disks. These eco-friendly disks act as a protective barrier, ensuring that weeds don not overtake your garden, all without harming the environment. They are a sustainable solution for maintaining weed-free landscapes'
    },
    {
      image: require('../Images/products/extra/12.jpg'), title: 'Alina Decorative Coir Pots',
      description: 'Elevate your garden aesthetics with our Alina Decorative Coir Pots. Made from sustainable coir, these pots add an eco-friendly touch to your plant displays. Use them to nurture your favourite plants while enhancing the visual appeal of your outdoor and indoor spaces. They are a sustainable choice that adds natural elegance to your surroundings'
    },
    {
      image: require('../Images/products/extra/13.jpg'), title: 'Alina Coco Hanging Bowls',
      description: 'Add a touch of nature to your decor with our Alina Coco Hanging Bowls. Crafted from natural coir, these hanging bowls create a unique platform for your plants. Suspend them in your garden or interior spaces to showcase your greenery in a distinctive, eco-conscious way. Perfect for displaying hanging and trailing plants, they add a natural touch of elegance to any setting'
    },
    {
      image: require('../Images/products/extra/14.jpg'), title: 'Alina Coir Nursery Pots',
      description: 'Give your young plants the best start with our Alina Coir Nursery Pots. These biodegradable pots not only support healthy root development but also reduce plastic waste. Ideal for nurseries and garden enthusiasts, they provide an eco-friendly alternative to traditional plastic pots, ensuring a sustainable beginning for your plants'
    },
    {
      image: require('../Images/products/extra/15.jpg'), title: 'Alina Coir Blankets',
      description: 'Protect your slopes and landscapes sustainably with our Alina Coir Blankets. These erosion control blankets, made from renewable coir, offer a biodegradable solution for managing soil erosion. They provide an eco-conscious approach to safeguarding your outdoor spaces, ensuring that the Earth is protected while slopes remain intact'
    },
    {
      image: require('../Images/products/extra/16.jpg'), title: 'Alina Coir Geo Textiles',
      description: 'Our Alina Coir Geo Textiles provide an eco-friendly solution for erosion control and stabilization. Sourced from Sri Lanka, these geotextiles are designed to protect and restore the environment. Use them in civil engineering and landscaping projects to uphold nature is balance, ensuring that soil stays in place while ecosystems thrive'
    },
    {
      image: require('../Images/products/extra/17.jpg'), title: 'Alina Coir Geo Logs',
      description: 'Enhance erosion control in aquatic environments with our Alina Coir Geo Logs. Crafted from renewable Sri Lankan coir, these logs offer structural support while promoting ecological harmony. They are perfect for protecting shorelines, aquatic habitats, and wetlands. Use them for sustainable aquatic and wetland restoration, ensuring that natural habitats are preserved'
    },
    {
      image: require('../Images/products/extra/18.jpg'), title: 'Alina Coir Brush (Thawashi)',
      description: 'Alina Coir Brush, also known as Thawashi, is a sustainable cleaning tool made from eco-friendly coir fibre. Its versatility makes it ideal for various cleaning tasks, from scrubbing dishes to removing stains from surfaces. An eco-conscious choice for everyday cleaning, it ensures a clean environment without harming the ecosystem'
    },
    {
      image: require('../Images/products/extra/19.jpg'), title: 'Alina Natural Coco Banister Brushes',
      description: 'Alina Natural Coco Banister Brushes are eco-friendly tools for keeping your banisters clean. Made from sustainable coir fibre, these brushes are perfect for maintaining the aesthetics of your home while minimising your environmental impact. They ensure a clean and eco-friendly home environment'
    },
    {
      image: require('../Images/products/extra/20.png'), title: 'Alina Green Space Coconut Shell Base Products',
      description: 'Explore the sustainable beauty of our Alina Green Space Coconut Shell Base Products. Crafted from natural coconut shells, these products are versatile for use in garden decoration and landscaping. Create eco-friendly, captivating outdoor spaces with our coconut shell-based products, ensuring that natural beauty and sustainability go hand in hand'
    },
  ]);

  return (
    <div>
    <header>
    <div className="prod_cont">
    <Navbar/>
    <div className="header_title" visible>
      <h2>ALL <br /><span> PRODUCTS</span> </h2>
    </div>
    </div>
    </header>
    <section>
      <div className="products">
        <div className="items">
            <Contents products={products}/>
        </div>
      </div>
      </section>
    <Footer/>

    </div>
  )
}


