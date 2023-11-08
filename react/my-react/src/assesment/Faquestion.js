import { useState } from "react";

export default function Faquestion() {
    const [display, setDisplay] = useState([
        {
            question: 'How to create click event in JavaScript?',
            answer: "addEventListener('click', function () { /* do something */ });",
            display: false
        },
        {
            question: 'How to add onchange in JavaScript?',
            answer: "object.onchange = function() { /* JavaScript */ };",
            display: false
        }
    ]);

    const toggleDisplay = (index) => {
        setDisplay(display.map((data,ind)=>{
            if(ind == index){
                return{...data,display:!data.display}
            }else{
                return data
            }
        }))
    };

    return (
        <div className="loginOutLine">
            {display.map((info, index) => {
                return (
                    <div key={index}>
                        <h3 className="bg-primary bg-opacity-50 rounded">{info.question}
                            <button className="btn btn-dark" onClick={() => toggleDisplay(index)}>
                                view
                            </button>
                        </h3>
                        {info.display ? 
                            <div className="w-50 mx-auto bg-secondary bg-opacity-50 rounded">
                                <p>{info.answer}</p>
                            </div> : ''
                        }
                    </div>
                );
            })}
        </div>
    );
}
