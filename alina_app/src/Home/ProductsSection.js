import React from 'react'
import '../Home/ProductsSection.css'

export default function ProductsSection() {
  return (
    <div className="pro_sec_cont">
    <h2>Products</h2>
       <div className='Products'>
        
        <div className="prod">
            <div className="img_cont">
                <img src={require('../Images/Product_img/ac0b077a-7360-4cd7-9552-e11532ebb1f2.b3cd9316f5cf6c04fb2e5d5536c89086.webp')} alt="" />
            </div>
            <p>COCO pods</p>
        </div>
        <div className="prod">
            <img src={require('../Images/Product_img/1.png')} alt="" />
            <p>COCO pods</p>
        </div>
        <div className="prod">
            <img src={require('../Images/Product_img/mixed-cocopeat-block.jpg')} alt="" />
            <p>COCO pods</p>
        </div>
    </div> 
    <button className='View_btn'><a href="/">View Products</a></button>
    </div>
    
  )
}
