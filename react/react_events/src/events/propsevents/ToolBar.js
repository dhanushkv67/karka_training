import Button from "./Button"
export default function ToolBar(props){
    return(
        <div >
            <Button data = {props.onPlayMovie}>Play Movie</Button>
            <Button data = {props.onUploadMovie}>Upload Image</Button>
        </div>
    )
}