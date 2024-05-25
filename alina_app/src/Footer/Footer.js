import React from 'react'
import Facebook from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../Footer/Footer.css';

export default function Footer() {
  return (
    <footer>
        <div className='Footer_container'>
            <div className="footer_cont_01">
              <h3>Alina (PVT) Ltd.</h3>
              <p>No. 10 c 03 Sama Mavatha,</p>
              <p>Bothalegama, Lunuvila</p>
              <p>Sri lanka</p>
              <p>Tel: +94 717 354493</p>
              <p>gamini@alinaeco.com</p>
            </div>
            <div className="footer_cont_02">
              <h3>Quick Links</h3>
              <ul className='list'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="socials">
                <h3>Follow US</h3>
                <li><a href="https://www.facebook.com/share/MjsPhNWAZCJi121B/?mibextid=LQQJ4d"><Facebook/></a></li>
                <li><a href="https://www.instagram.com/alina.eco?igsh=MWNzanJvamNyNnd2Mw%3D%3D"><InstagramIcon/></a></li>
                <li><a href="/"><YouTubeIcon/></a></li>
                <li><a href="/"><TwitterIcon/></a></li>
            </div>
    </div>
    <div className="bottom_bar">
        <p>&copy; 2024 Alina (PVT) Ltd - All rights reserved</p>
      </div>
    </footer>
  )
}
