import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm(){
    const [loginData,setLoginData] = useState({ username: '', password: '' })
    const [localData, setLocalData] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        const LocalDetails = JSON.parse(localStorage.getItem('allData'))
        if(LocalDetails){
            setLocalData(LocalDetails)
        }
    },[])

    function handleChange(e){
        const {value,name} = e.target
        setLoginData((prev)=>{
            return{...prev,[name]:value}
        })
    }
    function handleClick(){
        localData.forEach((data)=>{
            if(data.username == loginData.username){
                console.log('hi')
            }
            else if(loginData.username == 'admin'){
                navigate('/adminTable')
                console.log('admin')
            }
        })
    }
    return(
        <div className="loginOutline">
            <div className="bg-light w-25 p-5 rounded" onChange={handleChange} style={{margin:'170px 0'}}>
                <div className="my-3">
                    <Link to={'/'}><button className="btn me-3 btn-primary ">Login Form</button></Link>
                    <Link to={'/registration'}><button className="btn ms-2 btn-outline-primary">Registration Form</button></Link>
                    <hr className="w-50 mx-auto border-primary"></hr>
                </div>
                <input type="text" placeholder="username" name="username"></input>
                <input type="text" placeholder="password" name="password"></input>
                <button className="btn btn-primary w-100 my-3" onClick={handleClick}>login</button>
                <p>Don't have an account?<Link to={'/registration'}>register here</Link></p>
            </div>
        </div>
    )
}