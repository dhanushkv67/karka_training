export default function Child(props){
    function handleClick(){
        props.setData({
            name:'dhanush',
            id:1
        })
    }
return(
    <button onClick={handleClick}>childdata</button>
)
}