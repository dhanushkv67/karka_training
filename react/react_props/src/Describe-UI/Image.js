export default function Image({name,awards,profession,discovered,year=2000}){
    // year is set default props
    return(
        <div style={{backgroundColor:'pink',padding:20,width:300}}>
            <h1>{name}</h1>
            <img src="/" alt="image"></img>
            <ol>
                <li>profession:{profession}</li>
                <li>Awards    :{awards} </li>
                <li>Discovered:{discovered}</li>
                <li>year      :{year}</li>
            </ol>
        </div>
    )
}