export default function Click_function(){
    function handle_click(){
        alert('I am click event')
    }
    return(
        <button onClick={handle_click}>click me</button>
    )
}