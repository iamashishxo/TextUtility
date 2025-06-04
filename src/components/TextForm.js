import React, { useState } from 'react'

export default function TextForm(props) {
  const handelUpClick = ()=>
  {
     //console.log("upper case was clicked" + text);
     if(text==null)
     {
      console.log("enter something")
     }else{
            let newText = text.toUpperCase();
      setText(newText);
     }

    // let value = text.toUpperCase
    // setText(value)
  }
    const handelLowerClick = ()=>
  {
     let newText = text.toLowerCase();
     setText(newText);
  }
      const handelCopy = ()=>
  {
     let newText = document.getElementById("myBox");
     newText.select();
     navigator.clipboard.writeText(newText.value);
  }
      const handelClear = ()=>
  {
     let newText = '';
     setText(newText);
  }
   const handelOnChange = (event)=>
  {
     //console.log("change detected");
     setText(event.target.value)
  }
  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
  const [text,setText]=useState();
  //setText("Enter the text here2");
  return (
    <div>
  <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" placeholder = "Enter the text here" value = {text} onChange={handelOnChange} id="myBox" rows="3"></textarea>
   
</div>
<button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary" onClick={handelLowerClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
<button className="btn btn-primary mx-2" onClick={handelClear}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handelCopy}>Copy Text</button>
    </div>
  )
}

