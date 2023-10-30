import { useState } from "react"

export default function TodoComp(){
    const todo = localStorage.getItem('todo')
    const parTodo = todo?JSON.parse(todo):[]
    const [inputVal,setInputVal] = useState(parTodo)
    const [text,setText] = useState('')
    const [editVal, setEditVal] = useState(false)
    const [textarea , setTextArea] = useState(false)

    
    function handleClick(){
        let input = document.getElementsByTagName('input')[0].value
        let textAr = document.getElementsByTagName('textarea')[0].value
      if(input!=''&& textarea){
        setInputVal((prevData=>(
            [...prevData,
               {
                 id:prevData.length+1,
                value:input,
                checked:false,
                textarea:textAr,
                edit:false
                }
            ]
        )))
      }
        document.getElementsByTagName('input')[0].value = ''
        setText('')
        
    }
    function handleDelt(data){
       setInputVal((prevData)=>{
       return prevData.filter(todo=>{
            if(todo.value !== data.value){
                return todo
            }
        })
       })
    }
    function handleCheck(data,e){

        setInputVal((prevData)=>{

               return prevData.map((info)=>{
                    if(data == info){
                        return {
                            ...info,
                            checked:e.target.checked
                        }
                    }   
                    else{
                        return info  
                    }
        })
    })
        
    }
    function handleTxtArea(e){
        setText(e.target.value)
        setInputVal((prevData)=>{
           return prevData.map((data,index)=>{
                if(index == prevData.length-1){
                  return  {
                    ...data,
                    textarea:text
                }
                }
                else{
                    return data
                }
            })
        })
        
    }
    function handleDisTxt(data){
    setText(data.textarea)
    }
    function handleEdit(data){
        setInputVal((prevData)=>{
          return  prevData.map((info)=>{
                if(info == data){
                    return{
                        ...info,
                        edit:true
                    }
                }
                else{
                    return info
                }
            })
        })
        setEditVal(data.value)
    }
    function handleEdtDone(data){
        setInputVal((prevData)=>{
          return  prevData.map((info)=>{
                if(info == data){
                    return{
                        ...info,
                        value:editVal,
                        edit:false
                    }
                }
                else{
                    return info
                }
            })
        })
    }
    function handleYesrNo(e){
        if(e.target.value == 'yes'){
            setTextArea(true)
        }
        else{
            setTextArea(false)
        }
    }
    localStorage.setItem('todo',JSON.stringify(inputVal))

    return(
            <div className="row w-50 bg-secondary p-3 main rounded">
                <h1 className="bg-dark text-light rounded w-75 mx-auto">Todo App</h1>
                <hr className="border-5 my-4 border-light"></hr>
                <div className="row p-2 mx-auto mb-2">
                    <input type="text" className="col-7 mx-auto w-75 text-center fs-4 rounded  border-0" placeholder="add todo list" ></input>
                </div>
                <div className="bg-light w-75 my-3 mx-auto rounded">
                    <span>
                        <div className="w-50 mx-auto d-flex justify-content-around ">
                            <span>do u want textarea :</span>
                            <div className="ms-3 d-flex text-align-around" onChange={handleYesrNo}>
                                <input type="checkbox" name="textarea" value='yes'></input>
                                <label>yes</label>
                                <input type="checkbox" name="textarea" value='no'></input>
                                <label>no</label>
                            </div>
                        </div>
                    </span>
                    {textarea?<textarea rows='2' cols='50' className="my-2 text-center rounded    bg-info border border-dark" onChange={(e)=>{setText(e.target.value)}} placeholder="add more details about todo" value={text}></textarea>:''}
                </div>
                <div className="">
                     <button className="col-3 p-2 rounded border-0 bg-dark text-light w-50" onClick={handleClick}>add</button>
                </div>
                <ul className="bg-light w-75 mx-auto rounded p-3 my-3">
                    {inputVal.map((data,index)=>(
                    <>
                        <li key={index} onClick={()=>handleDisTxt(data)} className="bg-dark w-100 mx-auto list-unstyled p-1 text-light rounded d-flex justify-content-between my-2">

                            <input type="checkbox" className="ms-3" onChange={(e)=>handleCheck(data,e)}></input>

                            {data.edit?
                            <input className="bg-dark text-light" value={editVal} onChange={(e)=>setEditVal(e.target.value)} autoFocus></input>:<span className={data.checked?'text-decoration-line-through text-info':''}>{data.value}</span>}
                            <div>
                                {data.edit?<button className="btn btn-info btn-sm mx-2" onClick={()=>handleEdtDone(data)}>done</button>:<button className="btn btn-info btn-sm mx-2" onClick={()=>handleEdit(data)}>edit</button>}

                                <button className="btn btn-info me-1 btn-sm" onClick={()=>handleDelt(data.value)}>delete</button>
                            </div>
                        </li>
                        <li className="list-unstyled bg-info border border-dark rounded">
                            {data.textarea?<p>{data.textarea}</p>:'no reference added'}
                        </li>
                </>
                ))}
                </ul>
            </div>
    )   
}