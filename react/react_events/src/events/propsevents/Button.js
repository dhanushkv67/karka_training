import {useEffect} from 'react'
export default function Button(props){
    console.log(props)
    // useEffect(()=>{
    //     alert('hi')
    // },[])
    
    return(
       
        <button onClick={props.data}>
            {props.children}
        </button>
    )
}