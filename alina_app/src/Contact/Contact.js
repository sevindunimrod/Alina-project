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
            <h1>Contact <span>US</span></h1>

            <div className='contlist_cont'>
                <div className="column ">
                    <h2 className="header_tag">Sri Lanka</h2>
                    <div className="contact_list_1">
                        <p>Mr. Walisinghe, Director, Operation <br />
                                ALINA (Pvt) LIMITED <br />
                                No. 10 c 03 Sama Mavatha, <br />
                                Bothalegama, <br />
                                Lunuvila <br />
                                Sri lanka</p> <br /><br />
                            <p>Email: gamini@alinaeco.com</p> <br /><br />
                            <p>Tel: +94 717 354493</p> <br /><br />
                    </div>
                    <div className="contact_list_1">
                    <p>Mr. Wasantha, Director, Quality assurance, <br />
                                ALINA (PVT) LTD <br />
                                No. 82, Kasisettibawuma, Arachchiwilluwa, <br />
                                Senakudeerippuwa, <br />
                                Puttalam <br />
                                Sri lanka</p> <br /><br />
                            <p>Email: wasantha@alinaeco.com</p> <br /><br />
                            <p>Tel: +94 717 354494</p>
                    </div>
                    <div></div> 
                </div>
                <div className="column">
                    <h2 className="header_tag">Italy</h2>
                    <div className="contact_list_1">
                        <p>D.H.C.Fernando, Director, Marketing and Finance <br />
                        ALINA (pvt) Ltd <br />
                        Via monte sabotino. 10. <br />
                        Bussolengo <br />
                        37012. VR. <br />
                        Italy
                        </p> <br /><br />

                        <p>Email: fernando@alinaeco.com</p> <br /><br />
                        <p>Tel: +39 340 6476812 / +44 742 6353322</p> 
                    </div>
                </div>
                <div className="column">
                    <h2 className="header_tag">England</h2>
                    <div className="contact_list_1">
                    <p>Miss. NATHASHA LOWE<br />
                    ALINA (pvt) Ltd <br />
                    25B Hanover Road<br />
                    Tottenham <br />
                    N15 4DL <br />
                    England United Kingdom
                    </p> <br /><br />

                    <p>Email: nathasha@alinaeco.com</p> <br /><br />      
                    <p>Tel:+44 7426 353322</p> 
                    </div>

                </div>
                    {/* <section className='address_1'>
                        <h2 className="header_tag">Sri Lanka</h2>   
                        <div className="contact_list_1">
                            <p>Mr. Walisinghe, Director, Operation <br />
                                ALINA (Pvt) LIMITED <br />
                                No. 10 c 03 Sama Mavatha, <br />
                                Bothalegama, <br />
                                Lunuvila <br />
                                Sri lanka</p> <br /><br />
                            <p>Email: gamini@alinaeco.com</p> <br /><br />
                            <p>Tel: +94 717 354493</p> <br /><br />
                            <p>Mr. Wasantha, Director, Quality assurance, <br />
                                ALINA (PVT) LTD <br />
                                No. 82, Kasisettibawuma, Arachchiwilluwa, <br />
                                Senakudeerippuwa, <br />
                                Puttalam <br />
                                Sri lanka</p> <br /><br />
                            <p>Email: wasantha@alinaeco.com</p> <br /><br />
                            <p>Tel: +94 717 354494</p> 
                        </div>
                    </section> */}

                    {/* <div className="line"></div> */}

                    {/* <section className='address_1'>
                        <div className="header_tag_2">
                            <h2>Italy</h2>
                        </div>
                        <div className="contact_list_2">
                        <p>D.H.C.Fernando, Director, Marketing and Finance <br />
                        ALINA (pvt) Ltd <br />
                        Via monte sabotino. 10. <br />
                        Bussolengo <br />
                        37012. VR. <br />
                        Italy
                        </p> <br /><br />

                        <p>Email: fernando@alinaeco.com</p> <br /><br />
                        <p>Tel: +39 340 6476812 / +44 742 6353322</p> 
                        
                        </div>
                    </section> */}

                {/* <div className="line_2"></div> */}
                    
                {/* <section className='address_1'>
                    <div className="header_tag_3">
                        <h2>England</h2>
                    </div>
                        
                    <div className="contact_list_3">
                    <p>Miss. NATHASHA LOWE<br />
                    ALINA (pvt) Ltd <br />
                    25B Hanover Road<br />
                    Tottenham <br />
                    N15 4DL <br />
                    England United Kingdom
                    </p> <br /><br />

                    <p>Email: nathasha@alinaeco.com</p> <br /><br />      
                    <p>Tel:+44 7426 353322</p> 
                    </div>
                </section> */}
            </div>
        </div>    
        </header>

        
        <Footer/>
    </div>
  )
}
