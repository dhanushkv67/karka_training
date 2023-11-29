import { useEffect, useState } from "react";
import {useForm} from 'react';
import{useNavigate,BrowserRouter,Route, Routes} from 'react-router-dom' 
import './Chat.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faVoicemail,faMailBulk, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";



export default function RegisterPage(){
    const navigate = useNavigate();
    // const {register,handleSubmit,formStat} = useForm()
    const [data,setData] = useState({})
    const [error,setError] = useState(null)
    const [LocalData,setLocalData] = useState([])
    useEffect(()=>{
        const local = JSON.parse(localStorage.getItem('data'))
        if(local){
            setLocalData(local)
        }

    },[])
   
    function handleChange(e){
        setData((prevData)=>{
            if(e.target.name == 'children'){
                return({...prevData,children:[...data.children,e.target.value]})
            }else{
                return({...prevData,[e.target.name]:e.target.value})
            }
        })      
    }
    function handleUsernm(){
        const colors = ["text-warning","text-primary","text-info","text-danger"]
        const randomIndex = Math.floor(Math.random()*colors.length)
       setData((prevData)=>({...prevData,userName:data.firstName+(data.lastName).slice(0,4)+(data.DOB).slice(0,3),color:colors[randomIndex]}))
    }
    function handleSubmit(e) {
        console.log(data);
        e.preventDefault();
       
       
    
        if (data.password && data.password.length > 5 && error === 'password confirmed') {
            if (LocalData.length > 0) {
                localStorage.setItem("data", JSON.stringify([data, ...LocalData]));
            } else {
                localStorage.setItem("data", JSON.stringify([data]));
            }
            navigate('/');
        } else {
            alert('ERROR! Please verify the details');
        }
    }
    
    function confirmPassword(e){
        if(e.target.value==data.password){
            setError('password confirmed')
        }
        else{
            setError('correct your password')
        }
    }
   
    return(
       <div className="loginOutline p-5">
        <form className="row bg-info p-4  mx-auto bg-light rounded boxShadow"
         onChange={handleChange} onSubmit={handleSubmit} style={{width:"40%"}}>
        <h1 className="text-center">Register form</h1><hr></hr>
        <br></br>

        
        <FontAwesomeIcon icon={faUser} style={{position:"absolute",right:"220px",top:"165px"}}/>
        <input type="text" className="" name="firstName" placeholder="first name"></input>
        <p style={{color:'red'}}>{data.firstName?data.firstName.split('').map(a=>isNaN(a)).includes(false)?'error':'':''}</p>
        {/* <br></br> */}

        <FontAwesomeIcon icon={faUser} style={{position:"absolute", right:"220px",top:"250px"}}/>
        <input type="text" className="" name="lastName" placeholder="last name"></input>
        <p style={{color:'red'}}>{data.lastName?data.lastName.split('').map(a=>isNaN(a)).includes(false)?'error':'':''}</p>
        {/* <br></br> */}

        
        <input type="date" className="mb-4" name="DOB"onBlur={handleUsernm} placeholder="date of birth" ></input>
        <br></br>

        <FontAwesomeIcon icon={faEnvelope} style={{position:"absolute",right:"220px",top:"390px"}}/>
        <input type="email" className="" name="email" placeholder="email" required></input>
        <br></br>

        <FontAwesomeIcon icon={faLock} style={{position:"absolute",right:"220px",top:"450px"}}/>
        <input type="password" className="" name="password" placeholder="password"></input>
        <p style={{color:'green'}}>{(data.password)?(data.password).length<5?(<p style={{color:'red'}}>ur password is weak</p>):'ur password is strong':''}</p>
        <br></br>

        <FontAwesomeIcon icon={faLock} style={{position:"absolute", right:"220px",top:"540px"}}/>
        <input type="password" className="" onBlur={confirmPassword} name="password" placeholder="confrim password"></input>
        <p style={{color:(error!='password confirmed'?'red':'green')}}>{error}</p>
        <br></br>

        <label className="col-6">status     :</label>
        <input type="radio" className="col-1" name="status" value='married'></input>
        <label className="col-2">married</label>
        <input type="radio" className="col-1" name="status" value='single'></input>
        <label className="col-2">single</label>
        <br></br>

        <div className="row mt-3"><label className="col-6">userName</label> <p className=" col-2  text-light badge bg-light text-dark">{data.userName?data.userName:''}</p></div>
        <button type="submit" className="col-12  btn btn-primary mx-auto mt-5">submit</button>
       </form>
       </div> 
    )
}