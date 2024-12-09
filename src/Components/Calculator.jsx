import React,{useState} from 'react'
import './Calculator.css'


function Calculator() {
const {height, setHeight} = useState(0)
const {weight, setWeight} = useState(0)
const {message, setMessage} = useState('')
const {bmi, setBmi} = useState('')

let CalcBmi = (e) =>{
    // e.preventDefault()

    if(weight===0 || height===0 ){
        alert('Please Enter Valid Data')
    }
    else{
        let bmi = (weight/(height*height)*703)
        setBmi(bmi.toFixed(1))

        if(bmi<25){
            setMessage('You are under weight')
        }
        else if(bmi>=25 && bmi<60){
            setMessage('You are healthy')
        }
        else{
            setMessage('You are over weight')
        }
    }
}
let reload = () =>{
   window.location.reload()
}





  return (
    <>
      <div className="container">
        <h3>BMI Calculator</h3>
        <div>
            <label htmlFor="">Weight(ibs)</label>
            <input type="text" value={weight} onChange={(e)=>{setWeight(e.target.value)}} />
        </div>
        <div>
            <label htmlFor="">Height(in)</label>
            <input type="text" value={height} onChange={(e)=>{setHeight(e.target.value)}} />
        </div>

        <button type='submit' onSubmit={CalcBmi} >Submit</button>
        <button type='submit' onClick={reload} >Reload</button>

        <p>Your BMI is:{bmi}</p>
        <p>{message}</p>
      </div>
    </>
  )
}

export default Calculator
