import { Box, Text, useInput } from "ink";
import { useState } from "react";

const InputBox = () => {
  const [prompt, setPrompt] = useState("");

  useInput((input, key) => {
    if ((key.ctrl && input.toLowerCase() === "c") || key.escape) {
      process.exit(0);
    }

    if (key.backspace || key.delete) {
      setPrompt((prev) => prev.slice(0, -1));
    }

    if (input && !key.return && !key.escape) {
      setPrompt((prev) => prev + input);
    }
  });

  return (
    <>
      <Box
        borderStyle="round"
        padding={1}
        margin={1}
        borderColor={"blue"}
        flexDirection={"column"}
        width={"100%"}
      >
        <Box>
          <Text color={"green"}>Message IRIS-Code:</Text>
        </Box>

        <Box flexDirection={"row"}>
          <Box marginRight={1}>
            <Text color={"blue"}>{">"}</Text>
          </Box>
          <Text color={"cyan"}>{prompt}</Text>
        </Box>
      </Box>
    </>
  );
};

export default InputBox;
