import React from 'react'
import Navbar from '../Navbar/Navbar.js';
import './Contact.css';
import Footer from '../Footer/Footer.js';

export default function Contact() {
  return (
    <div>
        <header>
        <div className="contactus_cont">
            <Navbar/>
            <h1>Contact US</h1>

            <section>
                <div className="contlist_cont">
                    <section>
                    <div className="header_tag">
                        <h2>Sri Lanka</h2>
                    </div>
                        
                    <div className="contact_list_1">
                        <p>Mr. Walisinghe, Director, Operation
                            ALINA (Pvt) LIMITED
                            No. 10 c 03 Sama Mavatha,
                            Bothalegama,
                            Lunuvila
                            Sri lanka</p>
                        <p>Email: gamini@alinaeco.com</p>
                        <p>Tel: +94 717 354493</p>

                        <p>Mr. Wasantha, Director, Quality assurance,
                        ALINA (PVT) LTD
                        No. 82, Kasisettibawuma, Arachchiwilluwa,
                        Senakudeerippuwa,
                        Puttalam
                        Sri lanka
                        </p>
                        <p>Email: wasantha@alinaeco.com</p>
                        <p>Tel: +94 717 354494</p>
                    </div>
                    </section>
                </div>
            </section>
        </div>    
        </header>

        
        <Footer/>
    </div>
  )
}
