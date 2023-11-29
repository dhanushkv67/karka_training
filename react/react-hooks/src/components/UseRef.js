
import React, { useRef } from 'react';

function Reference() {
  const colorDivRef = useRef();

  const changeColor = () => {
    // Accessing the current property of the ref gives us the actual DOM element
    const divElement = colorDivRef.current;

    // Manipulating the DOM directly by changing the background color
    divElement.style.backgroundColor = getRandomColor();
  };

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(Math.floor(Math.random() * 16))
    return color;
  };
  

  return (
    <>
      <div
        ref={colorDivRef}
        style={{
          width: '200px',
          height: '200px',
          border: '1px solid #000',
          marginBottom: '10px',
        }}
      ></div>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default Reference;

