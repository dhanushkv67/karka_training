import { useState } from "react"

export default function FormValid(){
    const [data,setData] = useState('')
    function handleChange(e){
        setData((prevData)=>({...prevData,[e.target.name]:e.target.value}))
    }
    return(
        <>
            <div className="row" onChange={handleChange}>
                <label className="col-6">User Name:</label><input type="text" className="col-2" name="name"></input>
                <p className="col-12" style={{color:'red'}}>{(data.name)?(data.name).length<5?'user name is weak':'user name is strong':''}</p>
                <br></br>
                <label className="col-6">email:</label><input type="email" className="col-2" name="email"></input>
                <p className="col-12"></p>
                <br></br>
                <label className="col-6">password:</label><input type="password" className="col-2" name="password"></input>
            </div>
        </>
    )
}