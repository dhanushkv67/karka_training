import GetData from "./ShowJson.js"
import details from "./json.json"


// fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//    .then(data=>{data.json()})
//    .then(json_data=>
//     {console.log('1',json_data)
//    })

// function Display(){
//     let result=[]
   
//    console.log(result)
//     return (
//         <GetData json = {result}/>)

// } 
// export default Display;
function Display(details){
    return(
        <GetData json = {details}/>
    )
}
