import { useState } from "react";

export default function Cart({ items,setCart }) {
  const [display, setDisplay] = useState(false);
  const [count, setCount] = useState({});

  function handleClick() {
    setDisplay(!display);
  }

  function handleIncreaseCount(img1) {
    setCount((prev) => ({ ...prev, [img1]: (prev[img1] || 0) + 1 }));
  }

  function handleDecreaseCount(img1) {
    if (count[img1] > 0) {
      setCount((prev) => ({ ...prev, [img1]: prev[img1] - 1 }));
    } else {
      setCart((prevItems) => 
        prevItems.map((item) => {
          if(item.img1 == img1){
            return({
              ...item,quantity:item.quantity>0?item.quantity-1:0
            })
          }else{
            return item
          }
        }
        )
      );
    }
  }
  function handleDelete(img1){
    setCart((prev)=>{
      return  (prev.filter((item)=>item.img1!=img1))
    })
  }
  

  return (
    <div>
      {display ? (
        <div className="cart">
          <button onClick={handleClick} className="btn btn-dark">
            Cancel
          </button>
          {items.map((item) => (
            <div key={item.img1} className="d-flex justify-content-around m-3 mt-5 cartCard">
              <div className="w-25">
                <img src={item.img1} alt={item.brand} />
              </div>
              <div>
                <h4>{item.brand}</h4>
                <hr></hr>
                <p>{item.description}</p>
                <p>
                  <strong>Quantity :</strong>
                  {item.quantity + (count[item.img1] || 0)}
                </p>
                <p>
                  <strong>Price:</strong> 
                  {item.price}
                </p>
                <div className="mt-3">
                  <strong className="bg-secondary p-2 text-light rounded">TOTAL PRICE:</strong>
                </div>
              </div>
              <div className="d-flex flex-column gap-1">
                <button className="btn btn-dark" onClick={()=>{handleDelete(item.img1)}}>Delete</button>
                <br></br>
                <div>
                  <button className="btn btn-info me-2" onClick={() => handleIncreaseCount(item.img1)}>+</button>
                  <button className="btn btn-info" onClick={() => handleDecreaseCount(item.img1)}>-</button>
                </div>
                <h2 className="bg-secondary mt-2 text-light rounded">{item.price * (item.quantity + (count[item.img1] || 0))}</h2>
              </div>
            </div>
          ))}
          <div className="cartSubTtl">
            <h1 className="bg-secondary text-light">SUBTOTAL:</h1>
            <span>Calculate subtotal here</span>
          </div>
        </div>
      ) : (
        <div>
          <button className="btn btn-dark ms-5 visibleCart" onClick={handleClick}>
            Cart
          </button>
          <span className="btn btn-dark text-light">
            {items.length}
          </span>
        </div>
      )}
    </div>
  );
}
