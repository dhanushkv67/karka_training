import Child from "./Child"
import { useState } from "react"
export default function Parent(){
    const [data,setData] = useState('')
    return(
        <div>
            <Child setData={setData}/>
            <h1>{data.name}</h1>
            <h2>{data.id}</h2>
            <h3></h3>
        </div>
    )
}