import { faUser,faLock, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ChatLoginPage(){
    const [loginData,setLoginData] = useState({ username: '', password: '' })
    const [localData, setLocalData] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        const LocalDetails = JSON.parse(localStorage.getItem("data"))
        if(LocalDetails){
            setLocalData(LocalDetails)
        }
    },[])
    console.log(localData)

    function handleChange(e){
        const {value,name} = e.target
        setLoginData((prev)=>{
            return{...prev,[name]:value}
        })
    }
    function handleClick(){
        localData.forEach((data)=>{
            if(data.userName == loginData.username){
                navigate('ChatRoom',{state:{firstname:data.firstName,color:data.color}})
            }
            console.log(data.color)
        })
    }
    return(
        <div className="loginOutline" style={{height:"100vh"}}>
            <div className="bg-light w-25 p-4 rounded" onChange={handleChange} style={{margin:'170px 0',boxShadow:"0 0 15px 0 grey"}}>
                <div className="my-4">
                    <Link to={'/'}><button className="btn  btn-primary w-50">Login Form</button></Link>
                    <Link to={'RegisterPage'}><button className="btn ms-2 btn-outline-primary">Registration Form</button></Link>
                    <hr className="w-50 mx-auto border-primary"></hr>
                </div>
                <FontAwesomeIcon icon={faUser} style={{position:"absolute",left:"620px",top:"365px"}}/>
                <input type="text" placeholder="username" name="username"></input>
                <FontAwesomeIcon icon={faLock} style={{position:"absolute",left:"620px",top:"450px"}}/>
                <input type="text" placeholder="password" name="password"></input>
                <button className="btn btn-primary w-100 my-3" onClick={handleClick}>login</button>
                <p>Don't have an account?
                    <Link to={'RegisterPage'}>register here</Link>
                 <FontAwesomeIcon icon={faArrowLeftLong} className="ms-3 infiniteAnimate"/>
                </p>
               
            </div>
        </div>
    )
}