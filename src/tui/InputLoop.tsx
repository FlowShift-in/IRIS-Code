import { useInput } from "ink";
import React, { useState } from "react";

const InputLoop: React.FC = () => {
  const [value, setValue] = useState("");

  // Capture single key presses (not full lines)
  useInput((key, event) => {
    if (key === "escape") {
      // Optionally clear input when Escape is pressed
      setValue("");
    } else if (key === "enter") {
      // Handle Enter press (e.g., submit value)
      console.log("Enter pressed with value:", value);
      setValue("");
    } else if (key === "backspace") {
      // Handle Backspace
      setValue((prev) => prev.slice(0, -1));
    } else if (key.length === 1) {
      // Handle regular printable characters
      setValue((prev) => prev + key);
    }
  });

  return <div>InputLoop: {value}</div>;
};

export default InputLoop;
