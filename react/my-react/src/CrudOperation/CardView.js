import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CardView = () => {
    const [filtered,setFiltered] = useState([])
    const location = useLocation()
    const data = location.state
    const navigate = useNavigate()
    useEffect(()=>{
        setFiltered(data)
    },[])
    function handleEdit(info){
        navigate('/',{state:info})
    }
    function handleDelete(info){
        const afterFilter = filtered.filter((data)=>(data.id!=info.id))
        setFiltered(afterFilter)
            fetch(`https://reqres.in/api/users/${info.id}`,{
                method:"DELETE"
            })
            .then(data=>console.log(data))

        
    }
  return (
    <div className=' my-3 bg-dark p-2'>
        <h1 className='text-light'>Details</h1>
        <div className=' bg-primary bg-opacity-25 rounded row d-flex justify-content-around border p-4 w-100 mx-auto'>
        {filtered.map((info,index)=>{
        return(
        <div key={index} className="card col-3 mx-5 my-2 p-2" style={{width: "15rem"}}>
            <div className='overflow-hidden'style={{height:"200px"}}>
            <img src={info.avatar} className="card-img-top mx-auto" alt="..." style={{width:"12rem"}}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{info.first_name} {info.last_name}</h5>
                <p className="card-text">{info.email}</p>
                <button className='btn btn-light btn-outline-primary mx-2' onClick={()=>handleEdit(info)}>edit</button>
                <button className='btn btn-light btn-outline-primary mx-2' onClick={()=>handleDelete(info)}>delete</button>
            </div>
        </div>)
        })}
        </div>
    </div>
  )
}

export default CardView