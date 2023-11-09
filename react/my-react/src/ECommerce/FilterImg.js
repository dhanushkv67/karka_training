export default function FilterImg({onclick}){
    function handleClick(e){
        if(e.target.innerText=='All'){
            onclick(null)
        }
        else{
            onclick(e.target.innerText)
        }
    }
    return(
        <div>
            <div>
                <button className="btn btn-light">Boys</button>
                <button className="btn btn-light">Girls</button>
            </div>
            <div onClick={handleClick}>
                <h1>Sizes:</h1>
                
                <br></br>
                <button className="btn btn-light">XXL</button>
                <button className="btn btn-light">XL</button>
                <button className="btn btn-light">L</button>
                <button className="btn btn-light">M</button>
                <button className="btn btn-light">S</button>
                <button className="btn btn-light">All</button>
            </div>
        </div>
    )
}