import React from "react";

function QuotesAuthor(props) {
  return (
    <div className="quote-author" style={{ color: props.color }}>
      <span id="author">{props.author}</span>
    </div>
  );
}

export default QuotesAuthor;
