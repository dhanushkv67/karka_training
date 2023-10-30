import { useState, useRef, useEffect } from "react";

export default function InputBox(){
    const[data,setData] = useState(
        {
            firstname:'',
            lastname:'',
            address:''
        }
    )
    const [selectedIndex,setSelectedIndex] = useState(0)

    const firstnameRef = useRef(null)
    const lastnameRef = useRef(null)
    const addressRef = useRef(null)

    const inputRefs = [firstnameRef,lastnameRef,addressRef]

    function handleChange(e){
        setData((prevData)=>({
            ...prevData,
            [e.target.name]:e.target.value
        }))
    }
    useEffect(()=>{
        inputRefs[selectedIndex].current.focus()
    },[selectedIndex])

    function handleKeyDown(e){
        if(e.key=='Enter'){
            // setSelectedIndex((+e.target.id)+1)
            let index = e.target.id<Object.keys(data).length-1?(+e.target.id)+1:0
            setSelectedIndex(index)
            // inputRefs[index].current.focus()
        }
        
    // inputRefs[selectedIndex].current.focus()
    

        
    }
    return(
        <div  className="bg-info d-flex flex-column w-50 gap-2 p-5 rounded" onChange={handleChange} onKeyDown={handleKeyDown} >
            <label>
                firstname:
                <input ref={firstnameRef} id={0} type="text"className="" name="firstname" value={data.firstname}></input>
            </label>
            <label>
                lastname:
                <input ref={lastnameRef} id={1} type="text" name="lastname" value={data.lastname}></input>
            </label>
            <label>
                address:
                <input ref={addressRef} id={2} type="text" name="address" value={data.address}></input>
            </label>
        </div>
    )
}

// export default function InputBox() {
//   const [data, setData] = useState({
//     firstname: "",
//     lastname: "",
//     address: "",
//   });

//   const firstnameRef = useRef(null);
//   const lastnameRef = useRef(null);
//   const addressRef = useRef(null);

//   const fields = ["firstname", "lastname", "address"];
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   useEffect(() => {
//     const inputRefs = [firstnameRef, lastnameRef, addressRef];
//     inputRefs[selectedIndex].current.focus();
//   }, [selectedIndex]);

//   function handleKeyDown(e) {
//     if (e.key === 'Enter') {
//       fields.forEach((val, ind) => {
//         if (val === e.target.name) {
//           setSelectedIndex(ind < Object.keys(data).length - 1 ? ind + 1 : 0);
//         }
//       });
//     }
//   }

//   function handleChange(e) {
//     setData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   }

//   return (
//     <div className="bg-info d-flex flex-column w-50 gap-2 p-5 rounded" onKeyDown={handleKeyDown}>
//       <label>
//         First name:
//         <input
//           ref={firstnameRef}
//           type="text"
//           name="firstname"
//           value={data.firstname}
//           onChange={handleChange}
//           autoFocus={selectedIndex === 0}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           ref={lastnameRef}
//           type="text"
//           name="lastname"
//           value={data.lastname}
//           onChange={handleChange}
//           autoFocus={selectedIndex === 1}
//         />
//       </label>
//       <label>
//         Address:
//         <input
//           ref={addressRef}
//           type="text"
//           name="address"
//           value={data.address}
//           onChange={handleChange}
//           autoFocus={selectedIndex === 2}
//         />
//       </label>
//     </div>
//   );
// }
