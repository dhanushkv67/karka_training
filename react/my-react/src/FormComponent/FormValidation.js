import { useState } from "react";
import {useForm} from 'react';
import{useNavigate,BrowserRouter,Route, Routes} from 'react-router-dom' 
import FormRedirect from "./FormRedirect";


export default function FormValidation(){
    const navigate = useNavigate();
    // const {register,handleSubmit,formStat} = useForm()
    const [data,setData] = useState({children:[]})
    const [error,setError] = useState(null)
   
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
       setData((prevData)=>({...prevData,userName:data.firstName+(data.lastName).slice(0,4)+(data.DOB).slice(0,3)}))

       
    }
    function handleSubmit(e){
        console.log(data);
        e.preventDefault()
        if(data.password.length>5 && error == 'password confirmed'){
            localStorage.setItem("data",JSON.stringify(data))
            navigate('/loginPage')
        }else{
            alert('ERROR! please verify the details')
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
    function addMore(){
        const newChild = document.createElement('div')
        newChild.innerHTML='<label>children</label><input type="text" name="children" onChange={handleChange}></input>'
        document.getElementById('child').appendChild(newChild)
        
    }
    return(
       <form className="row w-50 bg-info p-3" onChange={handleChange} onSubmit={handleSubmit}>
        <h1>Register form</h1><hr></hr>
        <br></br>

        <lable className="col-6">First Name</lable>
        <input type="text" className="col-6" name="firstName"></input>
        <p style={{color:'red'}}>{data.firstName?data.firstName.split('').map(a=>isNaN(a)).includes(false)?'error':'':''}</p>
        <br></br>

        <label className="col-6">Last Name</label>
        <input type="text" className="col-6" name="lastName" ></input>
        <p style={{color:'red'}}>{data.lastName?data.lastName.split('').map(a=>isNaN(a)).includes(false)?'error':'':''}</p>
        <br></br>

        <label className="col-6">Date of Birth</label>
        <input type="date" className="col-6" name="DOB"onBlur={handleUsernm} ></input>
        <br></br>

        <label className="col-6">Email</label>
        <input type="email" className="col-6" name="email" required></input>
        <br></br>

        <label className="col-6">Password</label>
        <input type="password" className="col-6" name="password"></input>
        <p style={{color:'green'}}>{(data.password)?(data.password).length<5?(<p style={{color:'red'}}>ur password is weak</p>):'ur password is strong':''}</p>
        <br></br>

        <label className="col-6">Confirm Passord</label>
        <input type="password" className="col-6" onBlur={confirmPassword} name="password"></input>
        <p style={{color:(error!='password confirmed'?'red':'green')}}>{error}</p>
        <br></br>

        <label className="col-6">status</label>
        <input type="radio" className="col-1" name="status" value='married'></input>
        <label className="col-2">married</label>
        <input type="radio" className="col-1" name="status" value='single'></input>
        <label className="col-2">single</label>
        <br></br>

        <div className="row mt-3"><label className="col-6">userName</label> <p className=" col-2  text-light badge bg-light text-dark">{data.userName?data.userName:''}</p></div>
        
        <div id="child">{data.status=='married'?
               <> <label className="col-6">spouse name:</label>
               <input type="text" name="spouse" className="col-6"></input>
               <label className="col-6">children</label>
               <input type="text" name="children" className="col-6"></input>
               <button onClick={addMore} className="btn btn-dark my-5" type="button">add more</button></>:''}</div>
        <button type="submit" className="col-12 w-25 btn btn-dark mx-auto my-5">submit</button>
       </form> 
    )
}