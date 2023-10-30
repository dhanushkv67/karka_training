import {useEffect,useState} from 'react'
const data = ['dhanu','rabin','subin']
function UseStateComp(){
    const [index,setIndex] = useState(0)
    const [name,setName] = useState('dhanush')
    function handleClick(){
        setIndex(index+1)
        setName(data[index])
        // alert(data[index])
    }
    return(
        <div>
            <button onClick={handleClick}>click me</button>
            <h1>{name}</h1>
        </div>
    )
}
export default UseStateComp