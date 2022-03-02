import React, {useState} from "react";

function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text here");

  return (
    <>
      <div className="container my-4">
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>

      <div className="container my-4">
        <h3>Your Text Summary:</h3>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <h4>Preview:</h4>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
