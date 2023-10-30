    import {useState} from 'react'
    export default function Calculator(){
        const [num,setNum] = useState(0)
        const [result,setResult] = useState(0)
        let ans;
    
        function handleClick(number){
            if(!isNaN(number)){
                setNum((num==0)?`${number}`:`${num}${number}`)
            }
            else if(isNaN(number)){
                alert('cal is empty')
            }
            else if(number=='cl'){
                setNum(0)
            }
            else if(number=='del'){
                setNum(num.slice(0,-1))
                
            }
            // else if(number=='%'){
            //     setResult([num,'%'])
            //     setNum(0)
            // }
            else if(number=='/'){
                setResult([num,'/'])
                setNum(0)
            }
            else if(number=='*'){
                setResult([num,'*'])
                setNum(0)
            }
            else if(number=='+'){
                setResult([num,'+'])
                setNum(0)
            }
            else if(number=='-'){
                setResult([num,'-'])
                setNum(0)
            }
            else if(number=='.'){
                setNum(`${num}.`)
            }
            else if(number=='='){
                if(result[1]=='/'){
                    ans = result[0]/num
                }
                else if(result[1]=='*'){
                    ans = result[0]*num
                }
                else if(result[1]=='+'){
                    ans = parseFloat(result[0])+parseFloat(num)
                }
                else if(result[1]=='-'){
                    ans = result[0]-num
                }
                setNum(ans)
            }   
        }
        return(
            <div className="calculator">
                <div className="display">{num}</div>
                <div className="button-row">
                    <button onClick={()=>handleClick('del')}>del</button>
                    <button onClick={()=>handleClick('cl')}>cl</button>
                    <button onClick={()=>handleClick('%')}>%</button>
                    <button onClick={()=>handleClick('/')}>/</button>
                </div>
                <div className="button-row">
                    <button onClick={()=>handleClick(7)}>7</button>
                    <button onClick={()=>handleClick(8)}>8</button>
                    <button onClick={()=>handleClick(9)}>9</button>
                    <button onClick={()=>handleClick('*')}>*</button>
                </div>
                <div className="button-row">
                    <button onClick={()=>handleClick(4)}>4</button>
                    <button onClick={()=>handleClick(5)}>5</button>
                    <button onClick={()=>handleClick(6)}>6</button>
                    <button onClick={()=>handleClick('-')}>-</button>
                </div>            
                <div className="button-row">
                    <button onClick={()=>handleClick(1)}>1</button>
                    <button onClick={()=>handleClick(2)}>2</button>
                    <button onClick={()=>handleClick(3)}>3</button>
                    <button onClick={()=>handleClick('+')}>+</button>
                </div>            
                <div className="button-row">
                    <button onClick={()=>handleClick('0')}>0</button>
                    <button onClick={()=>handleClick('.')}>.</button>
                    <button onClick={()=>handleClick('=')}>=</button>
                </div>

            </div>
        )
    }