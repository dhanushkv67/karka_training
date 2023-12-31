    import React, { useEffect, useState } from 'react';
    import ReactTable from './ReactTable';
    import './style.css'
    import { useLocation, useNavigate } from 'react-router-dom';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import {faUser,faLock,faEnvelope,faFile} from '@fortawesome/free-solid-svg-icons'

    // login form

    const FetchData = () => {
        const [newUser, setNewUser] = useState({
            first_name:'',
            last_name:'',
            email:'',
            password:''
        });
        const [details, setDetails] = useState([]);
        const [editBool, setEditBool] = useState(false);
        const [showPopup, setPopup] = useState(false);

    const navigate = useNavigate()
    const location =useLocation()
    const data = location.state
    //    console.log(data)
    useEffect(()=>{
        if(data){
            setNewUser(data)
            setEditBool(true)
        }
    },[])

        const fetchUser = () => {
            fetch('https://reqres.in/api/users')
                .then(response => response.json())
                .then(data => setDetails(data.data))
                .catch(error => console.error(error));
        };

        useEffect(() => {
            fetchUser();
        }, []);

    
        function handleChange(e) {
            const { value, name, files } = e.target;
        
            if (e.target.type === 'file') {
                setNewUser((prev) => {
                    return { ...prev, [name]: URL.createObjectURL(files[0]) };
                });
            } else if (name === 'first_name' || name === 'last_name' || name === 'email' || name === 'password') {
                setNewUser((prev) => {
                    return { ...prev, [name]: value };
                });
            }
        }
        
        
        function handleCreate(){
            
            const maxId = Math.max(...details.map((data)=>data.id))
            const newId = maxId+1
            const userWitId = {...newUser,id:newId}
            fetch('https://reqres.in/api/users',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(userWitId)
            })
            .then(data=>data.json())
            .then(data=>{
                setDetails([...details,userWitId])
                console.log(data)
            })
            setPopup(true)
        }
        function handleShowup(status){
            if(status == 'table'){
                navigate('/reactTable',{state:details})
            }
            else if(status == 'card'){
                navigate('/card',{state:details})
            }
        }
        function handleEdit(){
        const editedList = details.map((data)=>{
                if(data.id == newUser.id){
                    return{
                        ...data,
                        ...newUser
                    }
                }
                else{
                    return data
                }
            })
            setDetails(editedList)
            fetch(`https://reqres.in/api/users/${newUser.id}`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(data=>data.json())
            .then(data=>console.log(data))
            setPopup(true)
        }

        return (
            <div className=' bg-light p-5 loginOutline'style={{width:'1500px',height:'100vh'}} >
                <div className='formdiv' onChange={handleChange}>
                    <h1 className='my-4 border-bottom'>Register form</h1>
                    <div className="input-icon">
                        <FontAwesomeIcon className='fontaswm' icon={faUser} />
                        <input type='text' name='first_name' placeholder='First Name' value={newUser.first_name}></input>
                    </div>
                    <div className="input-icon ">
                        <FontAwesomeIcon className='fontaswm' icon={faUser} />
                        <input type='text' name='last_name' placeholder='Last Name' value={newUser.last_name} ></input>
                    </div>
                    <div className="input-icon">
                        <FontAwesomeIcon className='fontaswm' icon={faEnvelope} />
                        <input type='email' name='email' placeholder='Email' value={newUser.email}></input>
                    </div>
                    <div className="input-icon">
                        <FontAwesomeIcon className='fontaswm' icon={faLock} />
                        <input type='text' name='password' placeholder='Password' value={newUser.password}></input>
                    </div>
                    <div className="input-icon">
                        <input type='file' name='avatar' placeholder='Add Avatar'></input>
                    </div>
                    <hr></hr>
                    <button className='btn bg-primary bg-opacity-75 w-100' onClick={editBool ? handleEdit : handleCreate}>Submit</button>
                </div>
                {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2 className='mb-5'>Choose View Option</h2>
                        <button onClick={()=>handleShowup('table')} className='btn btn-dark mx-3'>View as Table</button>
                        <button onClick={()=>handleShowup('card')} className='btn btn-dark mx-3'>View as Card</button>
                    </div>
                </div>
            )}
            </div>
            
        );
    };

    export default FetchData;
