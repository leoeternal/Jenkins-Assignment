import { useState } from "react";

function TextForm(props) {

    const changeText=(e)=>{
        setText(e.target.value);
    }

    const updateTextUpperCase=()=>{
        let getText=text.toUpperCase();
        setText(getText);
    }

    const[text,setText]=useState("");

    let myStyle={
        color:props.mode==='light'?'black':'white'
    }


    return (
        <div>
            <h1 style={myStyle}>{props.heading}</h1>
            <div className="text-form">
                <textarea style={props.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}} rows="8" cols="100" placeholder="Enter your text here ..." onChange={changeText} value={text}></textarea>
            </div>
            <div className="button-submit">
                <button className="btn btn-primary" onClick={updateTextUpperCase}>Convert to Upper Case</button>
            </div>
            <br/>
            <div className="preview">
                <h3 style={myStyle}>Preview</h3>
                <p style={myStyle}>{text}</p>
            </div>
        </div>
    )
}

export default TextForm;