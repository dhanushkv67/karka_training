import ToolBar from "./ToolBar"

export default function Execute(){
    function handlePlayMovie(){
        alert('I am PlayMovie')
    }
    function handleUploadMovie(){
        alert('I am Upload Movie')
    }
    return(
        <ToolBar onPlayMovie = {handlePlayMovie}
                 onUploadMovie = {handleUploadMovie}/>
    )
}