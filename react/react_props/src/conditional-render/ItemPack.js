export default function Itempack({name,isPacked}){
    var itemContent = name
    if(isPacked){
        itemContent = <del>{name} packed</del>
    }
    return(
        <div>
            {/* {isPacked?<li>{name}correct</li>:<li>{name}</li>} */}
            {<li>{name}{isPacked && 'correct'}</li>} 
            <li>{itemContent}</li>   
        </div>
    )
}