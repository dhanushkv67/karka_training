import React from 'react'

function Click_function() {
    function handle_click(){
        // try{
        //     let a=5,b=10
        //      c=a+b
        //     console.log(xzxzxzxc)
        // }
        // catch(e){
        //     alert(e)
        // }
        // finally{
        //     console.log("hiii");
        // }
        
        alert('I am click event')
    }
  return (
    <div>
        <button onClick={handle_click}>click me</button>
    </div>
  )
}

export default Click_function
