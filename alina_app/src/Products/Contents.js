import React from 'react'
import '../Products/Contents.css';
import Button from '@mui/material/Button';

export const Contents = (props) => {

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const products = props.products;
    console.log(props, products);
  return (
        <div className="contList">
            {products.map((product) => (
                <div className="productView" key={product.id}>
                <div className="imgBox">
                    <img src={product.image} alt="" />
                </div>
                <h2>{product.title}</h2>
                <div className="descr">
                    {/* <h2>{product.title}</h2> */}
                    <p>{product.description.substring(0, 110)}...</p>
                    
                    <Button onClick={handleOpen}>Open modal</Button>
      
                </div>
                    
                </div>
            )) }
        </div>
  )
}
