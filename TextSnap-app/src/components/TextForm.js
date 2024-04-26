import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  const myStyle = {
    backgroundColor: props.mode === 'dark' ? 'black' : 'white',  
    color: props.mode === 'dark' ? 'white' : 'black',
  };

  const [text, setText] = useState("");

  const convertUpText = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const convertdownText = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const copyText = ()=> {
    navigator.clipboard.writeText(text);
  }
  const clearText = ()=> {
    setText("");
  }

  return (
    <>
      <div className="container">
        <div className="mb-3 mt-4">
          <h1 className="display-5">{props.heading}</h1>
        </div>
        <div className="mb-3">
          <textarea style={myStyle}
            className={`form-control ${props.mode === 'dark' ? 'placeholder-dark' : 'placeholder-light'}`}
            id="textToAnalyze"
            rows="8"
            value={text}
            placeholder="Enter the text here"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertUpText}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertdownText}>
            Convert to Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>
            Clear
          </button>
        </div>
      </div>
      <div className="container">
        <h3 className="display-6">Your text summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{text.split(".").filter((element)=>{return element.length!==0}).length} Sentence</p>
        <p>{text.length === 0 ? 0 : (text.charAt(text.length-1) === ' ' ? (0.008) * text.trim().split(" ").length : (0.008) * text.trim().split(" ").length)} minutes required to read</p>
        <h3 className="display-6">Preview</h3>
        <p className="mb-5">{text.length>0? text:"Nothing to preview"}</p>
      </div>
    </>
  );
}