import React, { useState } from 'react';

function ImageSlider(){
  const images = [
    'https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE',

    'https://img.freepik.com/premium-photo/colorful-rainbow-flowers-is-reflected-mirror_865967-196235.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=ais',

    'https://img.freepik.com/premium-photo/explosion-colored-powder-isolated-white-background-3d-rendering_890887-12532.jpg',
  ];
  const [index,setIndex] = useState(0)
  function prevImg(){
    if(index==0){
        setIndex(images.length-1)
    }
    else(
        setIndex(index-1)
    )
  }
  function nextImg(){
    if(index+1==images.length){
        setIndex(0)
    }
    else(
        setIndex(index+1)
    )
  }
  return(
    <div>
        <button onClick={prevImg}>Previous</button>
        <img src={images[index]}/>
        <button onClick={nextImg}>Next</button>
    </div>
  )

 
};

export default ImageSlider;
