import { useState } from "react"
function FormComp(){
    const [input,setInput] = useState('')
    function handleChange(e){
        setInput(e.target.checked?e.target.value+input:input.replace(e.target.value,''))
    }
    return(
        <div onChange={handleChange}>
            {/* <label>enter your name</label> */}
            {/* <input type="text" onChange={handleChange}></input> */}
            <p>{input}</p>
            <br></br>
            <select>
                <option>option1</option>
                <option>option2</option>
                <option>option3</option>
            </select>
            <input type="checkbox" value='dhanush'></input>
            <lable>Dhanush</lable>
            <input type="checkbox" value='subin'></input>
            <label>Subin</label>
            <input type="checkbox" value='rabin'></input>
            <label>Rabin</label>
        </div>
    )
}
export default FormComp