import { useLocation } from "react-router-dom";
function GetUrl(){
   let url= useLocation().pathname
    return(
        <h1>{url}</h1>
    )
}
export default GetUrl