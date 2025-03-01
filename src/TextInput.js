import React, { useState } from "react";

export default function TextInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Enter Text Below:</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}
