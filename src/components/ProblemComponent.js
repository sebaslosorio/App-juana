import React,{ useState } from 'react'
import '../index.css'

export default function ProblemComponent() {
    const [num1, setNum1] = useState(Math.ceil(Math.random() * 10))
    const [num2, setNum2] = useState(Math.ceil(Math.random() * 10))
    const [score, setScore] = useState(0)
    const [response, setResponse] = useState("")
    const [control, setControl] = useState(false)

    const inputEnter = () => {
        const rta = parseInt(response)
        if (rta === (num1 * num2)) {
            setScore( score + 1)
            setResponse("")
            setNum1(Math.ceil(Math.random() * 10))
            setNum2(Math.ceil(Math.random() * 10))
            setControl(false)
        }
        else{
            setResponse("")
            setControl(true)
        }
    }

    const resetGame = () => {
        setControl(false)
        setResponse("")
        setScore(0)
        setNum1(Math.ceil(Math.random() * 10))
        setNum2(Math.ceil(Math.random() * 10))

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 colu-center">
                    <h1 className={ control ? "incorrect text-center" : "text-center"}>{num1}x{num2}</h1>
                    <input 
                        className="form-control"
                        type="text" 
                        onChange={(text) => setResponse(text.target.value)}
                        value={response}
                    />
                    <br />
                    <h1 className="text-center">Score: {score}</h1>
                    <br />
                    <button className="btn btn-warning btn-lg btn-block" onClick={()=>inputEnter()}>Check</button>
                    <button className="btn btn-success btn-lg btn-block" onClick={()=>resetGame()}>Reset</button>
                </div>
            </div>
        </div>
    )
}
