import React, { useState } from "react";

export default function Textarea(props) {
  document.title="textUtils-Home";
  const [text, setText] = useState("Enter your text");
  const handleOnClick = () => {
    // console.log("You have clicked handle on click");
    // setText("You have clicked handle on click");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("You have clicked on change");
    let newText = event.target.value;
    setText(newText);
  };
  return (
    <>
      <div style={{color : props.mode === "dark"?"white":"black",fontFamily:"Geneva"}}>
        <h3>{props.text}</h3>
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          style={{backgroundColor:props.mode==="dark"?"white":"white",fontFamily:"Geneva"}}
          rows="8"
        ></textarea>
        <button className="btn btn-primary" onClick={handleOnClick}>
          Click to change to upper case
        </button>
      </div>
      
      <div className="container " style={{color : props.mode === "dark"?"white":"black",fontFamily:"Geneva"}}>
        <h2>
          {text.split(" ").length} Words and {text.length} Characters
          
        </h2>
        <p>
          Time taken {0.008*text.split(" ").length} seconds;
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
