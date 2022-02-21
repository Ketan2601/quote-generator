import React from "react";

function Buttons(props) {
  return (
    <div className="Buttons">
      <button
        id={props.id}
        onClick={props.handleClick}
        style={{ color: "white", backgroundColor: props.color }}
        className="button"
      >
        New Quote
      </button>
    </div>
  );
}

export default Buttons;
