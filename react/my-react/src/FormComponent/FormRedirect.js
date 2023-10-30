    import { useState } from "react"

    export default function FormRedirect(){
        const [data,setData] = useState('')
        const [error,setError] = useState('')
        const regis_data = JSON.parse(localStorage.getItem("data"))
        function handleChange(e){
            setData((prevData=>({...prevData,[e.target.name]:e.target.value})))
        }
        function handlePassword(){
            if((data.userName == regis_data.userName || data.userName == regis_data.email)&& data.password == regis_data.password){
                setError('username & password is verified')
            }else{
                setError('username & password is not matched')
            }
        }
        function handleSubmit(e){
            e.preventDefault()
            if((data.userName == regis_data.userName || data.userName == regis_data.email)&& data.password == regis_data.password){
                alert('WELCOME TO OUR WEBSITE')
            }else{
                alert('error')
            }
        }
        return(
            <form className="row w-50 bg-primary h-50 p-3" onChange={handleChange} onSubmit={handleSubmit}>
                <h1>Login</h1>
                <hr></hr>
                <div>
                    <label className="col-6" >userName or email</label>
                    <input type="text" className="col-6" name="userName"></input>
                </div>
                <div>
                    <label className="col-6">password</label>
                    <input type="password" className="col-6" name="password" onBlur={handlePassword}></input>
                    <p>{error}</p>
                </div>
                <button className="btn btn-dark w-25 mx-auto" type="submit">login</button>
            </form>
        )
    }