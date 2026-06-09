import { Box, Text, useInput } from "ink";
import TextInput from "ink-text-input";
import { useState } from "react";
import InputType from "../types/input-type.js";
import savePrompt from "../hooks/useAgent.js";

const InputBox = () => {
  const [inputValue, setInputValue] = useState<InputType>({
    prompt: "",
  });

  const sendPrompt = ({ prompt }: { prompt: string }) => {
    if (!prompt) {
      throw new Error("Prompt is required");
    }

    if (typeof prompt !== "string") {
      throw new Error("Prompt must be a string");
    }

    savePrompt({ prompt });
  };

  useInput((input, key) => {
    if ((key.ctrl && input.toLowerCase() === "c") || key.escape) {
      process.exit(0);
    }

    if (key.return) {
      sendPrompt({ prompt: inputValue.prompt });
      setInputValue({ prompt: "" });
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
