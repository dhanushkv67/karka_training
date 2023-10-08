import data from './json.json'
export default function Readjson(){
    return(
        <div>
            <table class="table table-dark table-striped w-75 mx-auto my-5 ">
            <thead>
                <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            {data.details.map((info)=>{
                return(
                    
                    <tbody>
                        <tr>
                        <td>{info.name}</td>
                        <td>{info.place}</td>
                        <td>{info.age}</td>
                        </tr>
                    </tbody>  
                )
            })}
             </table>  
        </div>
    )
}