import React, { useState } from 'react'
import '../Products/Contents.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export const Contents = (props) => {

  // const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(8);

  const showMore = () => {
    setVisible((preValue) => preValue + 4);
  }

  // const showLess = () => {
  //   setVisible((preValue) => preValue - 4);
  // }

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const products = props.products;
  console.log(props, products);
  return (
        <div className="contList">
            {products.slice(0, visible).map((product) => (
                <div className="productView" key={product.id}>
                <div className="imgBox">
                    <img src={product.image} alt="" />
                </div>
                <h2>{product.title}</h2>
                <div className="descr">
                    {/* <h2>{product.title}</h2> */}
                    <p>{product.description.substring(0, 110)}...</p>
                    <div>
                    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            View More
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <h1>{product.title}</h1>
            <Typography sx={{ p: 2 , width:  400, top: '-10px'}}>{product.description}</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
              </div>
                    
                </div>
                  
                </div>
            )) }
            <div className="pagination">
              <button onClick={showMore}>view more</button>
              {/* <button onClick={showLess}>view less</button> */}
            </div>
        </div>
  )
}
