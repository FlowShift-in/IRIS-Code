import { Box, Text, useInput } from "ink";
import React, { useState } from "react";

const InputLoop: React.FC = () => {
  const [value, setValue] = useState("");

  // Capture single key presses (not full lines)
  useInput((input, key) => {
    if (key.escape) {
      // Optionally clear input when Escape is pressed
      setValue("");
    } else if (key.return) {
      // Handle Enter press (e.g., submit value)
      console.log("Enter pressed with value:", value);
      setValue("");
    } else if (key.backspace) {
      // Handle Backspace
      setValue((prev) => prev.slice(0, -1));
    } else if (input.length === 1) {
      // Handle regular printable characters
      setValue((prev) => prev + input);
    }
  });

  return (
    <>
      <Box>
        <Text>Write something:</Text>
      </Box>
      <Box>
        <Text>{value}</Text>
      </Box>
    </>
  );
};

export default InputLoop;
