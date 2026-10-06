import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Type something..."
      />

      <p>Characters: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;