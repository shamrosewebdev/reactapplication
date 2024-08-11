import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Form(props) {
  // Buttons
  const [text, setText] = useState("");
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("You have changed to uppercase","success");
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("You have changed to lowercase","success");
  };

  const titleCase = () => {
    let title = text.split(" ");
    let newText = title.map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    );
    let newt = newText.join(" ");
    setText(newt);
    props.showAlert("You have changed to titlecase","success");
  };

  const handleCopy=()=>{
    const text=document.getElementById("textArea")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("You have copied the text","success");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    let finalText=newText.join(" ");
    setText(finalText);
    props.showAlert("You have removed extra spaces","success");
  }



  // Dark mode
  const [btnText, setBtnText] = useState("Set Dark Mode");
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleColor = () => {
    if (style.color === "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Set Dark Mode");
    } else {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Set Light Mode");
    }
  };

  return (
    <>
      <div className="mb-3 container my-3">
        <h1>{props.heading}</h1>
        <textarea style={{backgroundColor:props.mode==="dark"?"#3D3D3D":"white", color:props.mode==="dark"?"white":"black"} }
          className="form-control"
          id="textArea"
          value={text}
          onChange={handleonChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3" onClick={upperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={lowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={titleCase}>
          Convert to Titlecase{" "}
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          Total Words <b>{text.split(" ").filter(Boolean).length}</b> and total
          characters <b>{text.length}</b>
        </p>
        <p>
          Will take <b>{0.008 * text.split(" ").filter(Boolean).length}</b>{" "}
          minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter your text to preview"}</p>
      </div>
    </>
  );
}
