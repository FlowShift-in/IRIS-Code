import { Box, Text, useInput } from "ink";
import { useState } from "react";

const InputLoop = () => {
  const [counter, setCounter] = useState<number>(0);

  useInput((input, key) => {
    if (key.ctrl && input === "c") {
      process.exit(0);
    }

    if (input === "a") {
      setCounter(counter + 1);
    } else if (input === "b") {
      setCounter(counter - 1);
    }
  });

  return (
    <Box flexDirection="column" margin={1}>
      <Text color="white">Hey , what's up?</Text>
      <Box borderStyle="round" flexDirection="row" paddingX={1}>
        <Text color="green">{counter}</Text>
      </Box>
    </Box>
  );
};

export default InputLoop;
