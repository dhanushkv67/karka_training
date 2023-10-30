import { useState } from "react"

export default function FormJson(){
    // const [data,setData] = useState({name1:'',email:'',message:''})
    const [data,setData] = useState('')

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        // setData({[name]:value})
        // setData((prevData)=>{
        //     return{...prevData,[name]:value}
        // })
        setData((preData)=>({...preData,[name]:value}))
        
    }
    function handleSubmit(e){
        e.preventDefault()
        alert(`firstName: ${data.firstName}\nlastName: ${data.lastName}`)
        console.log(data);

    }
    return(
        <>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <label>First name</label>
                <input type="text" name="firstName"></input>
                <br></br>
                <label>Last name</label>
                <input type="text" name="lastName"></input>
                <br></br>
                <label>Email</label>
                <input type="email" name="email"></input>
                <button type="submit">submit</button>
            </form>
            <h2>{data.firstName}</h2>
            <h2>{data.lastName}</h2>
            {/* <h2>{data.name}</h2> */}
        </>
    )
}