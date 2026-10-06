import { useState } from "react";

function Message() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>This message is visible.</p>}
    </div>
  );
}

export default Message;