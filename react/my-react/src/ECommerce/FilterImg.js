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
                <button>Boys</button>
                <button>Girls</button>
            </div>
            <div onClick={handleClick}>
                <h1>Sizes:</h1>
                
                <br></br>
                <button>XXL</button>
                <button>XL</button>
                <button>L</button>
                <button>M</button>
                <button>S</button>
                <button>All</button>
            </div>
        </div>
    )
}