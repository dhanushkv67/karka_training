export default function DisplaySc(props){
    return(
        <div>
            <h1>{props.title}</h1>
            {props.people.map((data)=>{
              return(  
                <div>
                    <img src={'https://i.imgur.com/'+data.imageId+'s.jpg'}/>
                    <b>{data.name}:</b>
                    <span>{data.profession} known for {data.accomplishment}</span>
                </div>
                )
            })}
        </div>
    )
}