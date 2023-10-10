import DisplayJSON from "./DisplayJSON";


  
  function LoadJSON() {
    // Access the data object directly
    const data ={ 
      name : "Dhanush"
    }
 
    return (
      <div>
      
        <DisplayJSON data ={data}/>
      </div>
    );
  }
  export default LoadJSON