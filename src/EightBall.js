import rawAnswers from "./RawAnswers";
import Answers from "./Answers";
import React, {useState} from "react";
import './EightBall.css'





const EightBall = (props) => {

    const [response, setResponse] = useState("Think of a Question.")
    const [color, setColor] = useState("black")

    const getResponse = (idx) => {
        return rawAnswers[idx].msg;
    }

    const getColor = (idx) => {
        return rawAnswers[idx].color;
    }

    function handleClick() {
        let idx = Math.floor(Math.random() * rawAnswers.length)
        console.log(idx)
        setResponse(getResponse(idx))
        setColor(getColor(idx))
    }


    return (
        <div className="ball-interior" style={{backgroundColor: color}}>
            <Answers msg={response}/>
            <button onClick={() => handleClick() }>Get Answer</button>
        </div>
    )
}


export default EightBall;