import React, { useState } from 'react';


export default function Input(props){
  const [text,setText] = useState();
 


const changes =(e) =>{
    console.log('ram ram');
    setText(e.target.value)
}

const click = () => {
let newText = text.toUpperCase();
setText(newText);

console.log();
}

const clicklow = () => {
    let newText = text.toLowerCase();
    
    setText(newText);
    
    console.log();
    }

    const clear = () => {
        let newText = "";
        setText(newText);
    }

    
    
return (
    <div className={`bg-${props.mode} text-${props.modetext}  mb-0`}>
   
    <h1 >{props.heading}</h1>
<div className={`container bg-${props.mode}`}>
            
        <div className={`form-group bg-$S{dark}`}>
        <label for="exampleFormControlTextarea1">Example textarea </label>
        <textarea className={"form-control bg-${dark}"} id="exampleFormControlTextarea1" rows="3"   placeholder='message' value={text}  onChange={changes}></textarea>
        </div>

        <button    className="btn btn-warning mr-2"    onClick={click} onDoubleClick={clicklow} >covert formated   </button>

        <button onClick={clear} className="btn  btn-dark mr-2">clear</button>
        <button className='btn' >dark mood</button>
        </div>

        <div className="container">
            <h3>count</h3>
        {/* <p> {text.split(" ").length }
        word and {text.length} charter</p> */}
        </div>

        <div className="container ">
            <h3>result</h3>
        <p>{text}</p>
        </div>        
            </div>
  )
}
