import { useState } from "react"

export default function ChangeColor(props){
    const [bgcolor,setColor]=useState('white')
    const [textColor,setTextColor] =useState('white')
    function handleClick(){
        setColor(document.getElementsByTagName('input')[0].value)
    }
    function ChangeText(){
        setTextColor((textColor=='white')?'black':'white')
    }
    return(
        <>
            <div className="displayColor" 
            style={{backgroundColor:`${bgcolor}`,color:`${textColor}`}}>{bgcolor}</div>
            <input type="text" placeholder="add color" className="d-block"/>
            <button className="btn " onClick={handleClick}>change color</button>
            <button className="btn " onClick={ChangeText}>Toogle text</button>
        </>
    )
}