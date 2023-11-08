import { useEffect, useState, } from "react"
import { Link,useNavigate } from "react-router-dom"
export default function RegistrationForm() {
    const [details,setDetails] = useState('')
    const [localData,setLocalData] =  useState([])
    const [src,setsrc] = useState('/')
    const navigate = useNavigate()
    useEffect(()=>{
        const localDetails = JSON.parse(localStorage.getItem('allData'))
        if(localDetails){
            setLocalData(localDetails)
        }
    },[])

    function handleChange(e){
        const {value,name} = e.target
        setDetails((prev)=>{
            return{...prev,[name]:value}
        })
    }
    function handleClick(){
        setLocalData((prev)=>{
            return([...prev,details])
        }) 
        setTimeout(()=>{
            navigate('/')
        },1000)  
    }
    useEffect(()=>{
        if(localData.length>0){
            localStorage.setItem('allData',JSON.stringify(localData))
            
        }
    },[localData])
    
    return (
        <div className="loginOutline">
            <div className="bg-light w-50 p-4 rounded shadow my-3 p-5 input-color scroll" onChange={handleChange}>
                <div className="my-3 
                mb-5 bg-primary p-2 rounded sticky">
                    <Link to={'/'}><button className="btn btn-outline-light p-2 w-50 mt-4 fs-4 fw-bold ">Login Form</button></Link>
                    <Link to={'/registration'}><button className="btn  btn-primary p-2 w-50 bg-light mt-4 text-dark fs-4 fw-bold">Registration Form</button></Link>
                    <hr className="w-100 mx-auto border-primary"></hr>
                </div>

                <div className="d-flex gap-5 mb-5">
                    <div className="d-flex  w-50 flex-column">
                        <label className="text-start">First name:</label>
                        <input type="text" placeholder="first name" name="firstname" className=""></input>
                    </div>
                    <div className="d-flex  w-50 flex-column">
                        <label className="text-start">Last name:</label>
                        <input type="text" placeholder="last name" name="lastname" className=""></input>
                    </div>
                </div>
                <div className="mb-5 text-start">
                    <label>DOB:</label>
                    <input type="date" placeholder="date of birth" name="DOB" className="text-secondary"></input>
                </div>

                <div className="d-flex gap-5 mb-5 text-start">
                    <div className="d-flex  w-50 flex-column">
                        <label>State:</label>
                        <input type="text" placeholder="state"></input>
                    </div>
                    <div>
                        <label>District:</label>
                        <input type="text" placeholder="district"></input>
                    </div>
                </div>
                <div className="mb-5 text-start">
                    <label>Phone:</label>
                    <input type="number" placeholder="number" name="number"></input>
                </div>
                <div className="mb-5 text-start">
                    <label>Email:</label>
                    <input type="email" placeholder="email" name="email"></input>
                </div>
                <div className="d-flex gap-5 mb-5 ">
                    <div className="d-flex w-50  flex-column bg-secondary bg-opacity-25 rounded" >
                        <label className="text-start border-bottom">Gender:</label>
                        <div className="d-flex align-items-center gap-4 fs-5">
                            <label>Male</label>
                            <input type="radio" value='male' name="gender"
                            className="justify-content-top"></input>
                            <label>Female</label>
                            <input type="radio" value='female'name="gender"></input>
                        </div>
                    </div>
                    <div className="d-flex w-50 flex-column bg-secondary bg-opacity-25 rounded" >
                        <label className="text-start border-bottom">Status:</label>
                        <div className="d-flex align-items-center gap-4 fs-5">
                            <label>Married</label>
                            <input type="radio" value='married'name="status"></input>
                            <label>Single</label>
                            <input type="radio" value='single' name="status"></input>
                        </div>
                    </div>
                </div>
                <div className="text-start">
                    <label >Create UserName:</label>
                    <input type="text" placeholder="create username" name="username"></input>
                </div>
                <div className="d-flex gap-5 mb-5 text-start my-5">
                    <div className="d-flex  w-50 flex-column">
                        <label>Create Password:</label>
                        <input type="text" placeholder="create password" name="password"></input>
                    </div>
                    <div className="d-flex  w-50 flex-column">
                        <label>Confirm Password:</label>
                        <input type="password" placeholder="confirm password" name="Cpassword"></input>
                    </div>
                </div>
                <div className="text-start">
                    <label>Add Avatar</label>
                    <input type="file" accept="image/*" name="profilePhoto"></input>
                </div>
                <img src={src}></img>

                <button className="btn btn-primary w-100 my-3" onClick={handleClick}>submit</button>
                <p className="fs-4">Click here to <Link to={'/'}>Login </Link></p>
            </div>
        </div>
    )
}