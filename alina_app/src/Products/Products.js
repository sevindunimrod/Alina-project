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
      image: require('../Images/products/extra/9.png'), title: 'Alina Coco Poles',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      image: require('../Images/products/extra/10.png'), title: 'COCO beds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      image: require('../Images/products/extra/10.png'), title: 'COCO beds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      image: require('../Images/products/extra/10.png'), title: 'COCO beds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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


