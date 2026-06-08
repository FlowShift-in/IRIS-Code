import { Box, Text, useInput } from "ink";
import TextInput from "ink-text-input";
import { useState } from "react";
import InputType from "../types/input-type.js";

const InputBox = () => {
  const [inputValue, setInputValue] = useState<InputType>({
    prompt: "",
  });

  useInput((input, key) => {
    if ((key.ctrl && input.toLowerCase() === "c") || key.escape) {
      process.exit(0);
    }
  });

  return (
    <>
      <Box
        borderStyle="round"
        padding={1}
        marginY={1}
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
          <TextInput
            value={inputValue.prompt}
            placeholder="Enter Your Prompt here..."
            onChange={(value) => setInputValue({ prompt: value })}
          />
        </Box>
      </Box>
    </>
  );
};

export default InputBox;
