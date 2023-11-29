import FilterImg from "./FilterImg";
import Cart from "./Cart";
import './Ecom.css';
import { image } from './image';
import { useState } from "react";

export default function Mainsite() {
  const [sizeFilter, setSizeFilter] = useState(null);
  const [cart, setCart] = useState([]);

  return (
   
      <div className="d-flex flex-row w-100  p-5 rounded  bg-dark">
      <div className="left">
        <FilterImg onclick={setSizeFilter} />
      </div>
      <div className="section row flex-1">
        {sizeFilter
          ? image.filter(i => i.size === sizeFilter).map(i => (
              <ImgCard key={i.img1} {...i} addToCart={setCart} cart={cart} />
            ))
          : image.map(i => (
              <ImgCard key={i.img1} {...i} addToCart={setCart} cart={cart} />
            ))}
      </div>
      <div className="right w-5 bg-dark">
        <Cart items={cart} setCart={setCart}/>
      </div>
    </div>
    
  );
          }


function ImgCard({ img1, img2, brand, description, price, addToCart, cart }) {
  const [imgHover, setImgHover] = useState(false);

  function handleClick(img1) {
    const existingItem = cart.find((cartItem) => cartItem.img1 === img1);
  
    if (existingItem) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.img1 === img1) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
      addToCart(updatedCart);
    } else {
      addToCart((prevData)=>{
        const addQuantity = image.find((item)=> item.img1 == img1)
        return[...prevData,{...addQuantity,quantity:1}]
      })
    }
  }
  function handleMouseEnter() {
    setImgHover(true);
  }

  function handleMouseLeave() {
    setImgHover(false);
  }

  return (
    <div className="col-3 p-2 border" style={{}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={imgHover ? img2 : img1} alt={brand}  /> 
      <div>
        <h5>{brand}</h5>
        <p>{description}</p>
        <bold className="fw-bold">₹{price}.00</bold>
      </div>
      <button className={imgHover ? "btn btn-warning" : "btn btn-dark"} onClick={() => { handleClick(img1) }}>Add To Cart</button>
    </div>
  );
}
